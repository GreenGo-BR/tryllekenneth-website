/**
 * Test script to verify geo-language redirect functionality
 * Tests the middleware behavior with different country codes
 */

const http = require('http');
const https = require('https');

const BASE_URL = 'http://localhost:3000';

function testRequest(country, cookieValue = null, description) {
  return new Promise((resolve) => {
    const url = new URL(BASE_URL);
    
    const options = {
      hostname: url.hostname,
      port: url.port || 3000,
      path: '/',
      method: 'GET',
      headers: {
        'x-vercel-ip-country': country,
        'User-Agent': 'GeoRedirectTest/1.0',
      },
      redirect: 'manual', // Don't follow redirects automatically
    };

    if (cookieValue) {
      options.headers['Cookie'] = `NEXT_INTL_LOCALE=${cookieValue}`;
    }

    const req = http.request(options, (res) => {
      const statusCode = res.statusCode;
      const location = res.headers.location;
      
      resolve({
        country,
        cookie: cookieValue || 'none',
        description,
        statusCode,
        redirectTo: location || 'no redirect',
        success: (country === 'DK' && location === '/da') ||
                 (country !== 'DK' && location === '/en') ||
                 (cookieValue === 'en' && location === '/en') ||
                 (cookieValue === 'da' && location === '/da'),
      });
    });

    req.on('error', (error) => {
      resolve({
        country,
        cookie: cookieValue || 'none',
        description,
        error: error.message,
        success: false,
      });
    });

    req.end();
  });
}

async function runTests() {
  console.log('\n🧪 GEO-LANGUAGE REDIRECT VERIFICATION\n');
  console.log('=' .repeat(70));

  const tests = [
    ['DK', null, 'Denmark visitor (no cookie) → should redirect to /da'],
    ['US', null, 'US visitor (no cookie) → should redirect to /en'],
    ['GB', null, 'UK visitor (no cookie) → should redirect to /en'],
    ['NO', null, 'Norway visitor (no cookie) → should redirect to /en'],
    ['DK', 'en', 'Denmark visitor with EN cookie → should redirect to /en'],
    ['US', 'da', 'US visitor with DA cookie → should redirect to /da'],
    ['DK', 'da', 'Denmark visitor with DA cookie → should redirect to /da'],
    ['US', 'en', 'US visitor with EN cookie → should redirect to /en'],
  ];

  const results = [];
  
  for (const [country, cookie, description] of tests) {
    const result = await testRequest(country, cookie, description);
    results.push(result);
    
    const icon = result.success ? '✅' : '❌';
    const cookieInfo = result.cookie !== 'none' ? ` [Cookie: ${result.cookie}]` : '';
    
    console.log(`\n${icon} ${description}${cookieInfo}`);
    console.log(`   Country: ${result.country} → Redirects to: ${result.redirectTo}`);
    
    if (result.error) {
      console.log(`   Error: ${result.error}`);
    }
  }

  // Summary
  console.log('\n' + '='.repeat(70));
  const passedTests = results.filter(r => r.success).length;
  const totalTests = results.length;
  const passPercentage = Math.round((passedTests / totalTests) * 100);
  
  console.log(`\n📊 RESULTS: ${passedTests}/${totalTests} tests passed (${passPercentage}%)\n`);

  // Detailed breakdown
  console.log('🔍 DETAILED BREAKDOWN:\n');
  
  const geoTests = results.filter(r => r.cookie === 'none');
  const cookieTests = results.filter(r => r.cookie !== 'none');
  
  console.log('Geo-Detection (no cookie):');
  geoTests.forEach(t => {
    const icon = t.success ? '✅' : '❌';
    console.log(`  ${icon} ${t.country} → ${t.redirectTo}`);
  });
  
  console.log('\nCookie Override (with language preference):');
  cookieTests.forEach(t => {
    const icon = t.success ? '✅' : '❌';
    console.log(`  ${icon} ${t.country} (cookie: ${t.cookie}) → ${t.redirectTo}`);
  });

  // Test for redirect loops
  console.log('\n' + '='.repeat(70));
  console.log('🔄 REDIRECT LOOP TEST:\n');
  
  const noRedirectLoopTests = [
    { path: '/da', cookie: null, description: 'Already on /da → should not redirect' },
    { path: '/en', cookie: null, description: 'Already on /en → should not redirect' },
  ];

  for (const test of noRedirectLoopTests) {
    const url = new URL(BASE_URL);
    const options = {
      hostname: url.hostname,
      port: url.port || 3000,
      path: test.path,
      method: 'GET',
      headers: {
        'x-vercel-ip-country': 'DK',
        'User-Agent': 'GeoRedirectTest/1.0',
      },
      redirect: 'manual',
    };

    const result = await new Promise((resolve) => {
      const req = http.request(options, (res) => {
        resolve({
          path: test.path,
          statusCode: res.statusCode,
          hasRedirect: res.statusCode >= 300 && res.statusCode < 400,
          redirectTo: res.headers.location || 'none',
        });
      });
      
      req.on('error', () => {
        resolve({ path: test.path, error: 'Connection failed' });
      });
      
      req.end();
    });

    const icon = !result.hasRedirect ? '✅' : '❌';
    console.log(`${icon} ${test.description}`);
    if (result.hasRedirect) {
      console.log(`   ⚠️  Unexpected redirect to: ${result.redirectTo}`);
    }
  }

  console.log('\n' + '='.repeat(70) + '\n');
  
  const allPassed = results.every(r => r.success);
  if (allPassed) {
    console.log('✅ All geo-redirect tests PASSED!\n');
  } else {
    console.log('❌ Some tests FAILED. Review the results above.\n');
  }
}

runTests().catch(console.error);
