import { orgLinks, site, siteUrl, socialLinks } from "@/data/site";

export const dynamic = "force-static";

export function GET() {
  const social = socialLinks.map((link) => `- [${link.label}](${link.href})`).join("\n");

  const body = `# ${site.name}

> ${site.shortDescription}

${site.name} – ${site.title}

${site.name} is an initiative of ${site.companyName} (Company no: ${site.companyNumber}), the producer of 1001 Inventions. It is produced and led by Ahmed Salim. Historical research is grounded in work by the Foundation for Science, Technology and Civilisation (FSTC).

## Summary

${site.description}

${site.heroLead[0]}

${site.heroLead[1]}

${site.statement}

## Pages

- [Home](${siteUrl}/): Main landing page for the movement
- [Privacy Policy](${siteUrl}/privacy): How personal data and interest registrations are handled
- [Terms and Conditions](${siteUrl}/terms): Terms of use for this website

## Home page sections

- [Take Part](${siteUrl}/#join): Register interest and join the movement
- [Why It Matters](${siteUrl}/#about): Why restoring these stories matters now
- [The Legacy](${siteUrl}/#stories): Stories and examples of overlooked women from Muslim civilisation
- [Programmes](${siteUrl}/#creating): Books, exhibitions, education and digital media plans
- [Who Are We](${siteUrl}/#behind): 1001 Foundation, 1001 Inventions, and leadership

## Organizations

- [1001 Foundation](${orgLinks.foundation}): Parent organisation for the wider public movement
- [1001 Inventions](${orgLinks.inventions}): Global books, exhibitions and educational programmes this initiative builds on
- [FSTC](${orgLinks.fstc}): Historical research foundation behind the sourcebook
- [Ahmed Salim](${orgLinks.ahmedSalim}): Producer and lead of the ${site.name} initiative

## Social

${social}

## Contact

- Take part and press enquiries: ${site.contactEmail}
- Legal / privacy enquiries: see the Privacy Policy contact section

## Optional

- [Sitemap](${siteUrl}/sitemap.xml)
- [Robots](${siteUrl}/robots.txt)
- [llms.txt](${siteUrl}/llms.txt)
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
