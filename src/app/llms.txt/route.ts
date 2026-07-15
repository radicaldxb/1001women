import { site, siteUrl } from "@/data/site";

export const dynamic = "force-static";

export function GET() {
  const body = `# ${site.name}

> ${site.shortDescription}

${site.name} is an initiative of 1001 Foundation, the producer of 1001 Inventions. The microsite shares the movement’s purpose, children’s book plans, exhibition and education resources, and ways to take part.

## Pages

- [Home](${siteUrl}/): Main landing page with storytelling, children’s book interest, exhibition plans and join options
- [Privacy Policy](${siteUrl}/privacy): How interest registrations and contact details are handled

## Organizations

- [1001 Foundation](https://1001foundation.com/): Parent organisation developing the wider public movement
- [1001 Inventions](https://www.1001inventions.com/): Global cultural brand this initiative builds on
- [FSTC](https://www.fstc.org.uk/): Research foundation behind the historical sourcebook

## Contact

- Email interest registrations and press enquiries to ${site.contactEmail}

## Optional

- [Sitemap](${siteUrl}/sitemap.xml)
- [Robots](${siteUrl}/robots.txt)
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
