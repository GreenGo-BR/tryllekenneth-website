import React from 'react';

interface StructuredDataProps {
  data: Record<string, any> | Record<string, any>[];
}

/**
 * StructuredData component for rendering JSON-LD schema markup
 * Used for SEO rich results and Google knowledge graph
 */
export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(Array.isArray(data) ? data : data),
      }}
      suppressHydrationWarning
    />
  );
}

/**
 * MultipleStructuredData component for rendering multiple JSON-LD schemas
 */
export function MultipleStructuredData({ schemas }: { schemas: Record<string, any>[] }) {
  return (
    <>
      {schemas.map((schema, index) => (
        <StructuredData key={`schema-${index}`} data={schema} />
      ))}
    </>
  );
}
