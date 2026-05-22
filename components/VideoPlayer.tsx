'use client';

export function VideoPlayer({  src, title, description, locale }: { src: string; title: string; description: string; locale: string }) {
  // Create a data URL for iframe content
  const iframeHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { margin: 0; padding: 0; }
        video { width: 100%; height: 100%; display: block; }
      </style>
    </head>
    <body>
      <video controls preload="metadata" style="width:100%;height:100%;display:block;background:black;">
        <source src="${src}" type="video/mp4" />
      </video>
    </body>
    </html>
  `;

  const iframeSrc = `data:text/html;charset=utf-8,${encodeURIComponent(iframeHTML)}`;

  return (
    <div className="group rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="aspect-video bg-black rounded-lg overflow-hidden">
        <iframe
          src={iframeSrc}
          className="w-full h-full border-0"
          allowFullScreen
          title={title}
          style={{ width: '100%', height: '100%', display: 'block' }}
        />
      </div>
      <div className="p-3 bg-background border-t border-slate-200/10 rounded-b-lg">
        <h3 className="text-sm font-medium text-foreground">
          {title}
        </h3>
        <p className="text-xs text-muted-foreground mt-0.5">
          {description}
        </p>
      </div>
    </div>
  );
}
