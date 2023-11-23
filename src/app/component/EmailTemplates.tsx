import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Row,
} from "@react-email/components";
import * as React from "react";

interface ThankyouEmailProps {
  tips?: { id: number; description: string }[];
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

const PropDefaults: ThankyouEmailProps = {
  tips: [
    {
      id: 1,
      description:
        "📰 Weekly Tech News: Stay in the loop with bite-sized updates on the latest tech trends.",
    },
    {
      id: 1,
      description:
        "💡 Amazing Projects: Check out mind-blowing projects and get inspired.",
    },
    {
      id: 1,
      description:
        "📚 Valuable Blogs and Tips: Level up your tech game with tips that even your younger self would understand.",
    },
    {
      id: 1,
      description:
        "🚀 First Dibs on Hackathons: Be the first to know about hackathons and show off your skills.",
    },
  ],
};

export const ThankyouEmail = ({
  tips = PropDefaults.tips,
}: ThankyouEmailProps) => (
  <Html>
    <Head />
    <Preview>Thankyou for joining us.</Preview>
    <Body style={main}>
      <Container style={container}>
        
        <Row style={header}>
       
          <Column style={headerImageContainer}>
            <Img width={340}  src={`https://firebasestorage.googleapis.com/v0/b/projectfriendz-45b49.appspot.com/o/images%2Fbanner2.png?alt=media&token=c96ca45b-6abf-4ff9-972d-217d89ab4d65`} />
          </Column>
        </Row>

        <Section style={content}>
          <Heading as="h2" style={title}>
          Guess what?
          </Heading>
          <Text style={paragraph}>
            You just made one awesome decision by joining DevLetter!
            🎉 Get ready for a tech-packed journey filled with weekly news, cool
            projects, expert tips, and exclusive hackathon invites.
          </Text>

          <Hr style={divider} />

          <Heading as="h2" style={title}>
            Here&#x27;s the lowdown on what you&#x27;re in for:
          </Heading>
          
          <ul>
            {tips?.map((tip) => (
              <li key={tip.id}>
                <Text style={paragraph}>{tip.description}</Text>
              </li>
            ))}
          </ul>

          <Text style={paragraph}>
            Once again, thank you for choosing DevLetter. Together, let&#x27;s make
            this community a hub of innovation and collaboration.
          </Text>

          <Hr style={divider} />

          <Heading as="h2" style={title}>
          Feel free to reach out, share your thoughts, or suggest topics you&#x27;d like to see covered in our newsletters.
          </Heading>
          <Section style={buttonContainer}>
            <Link style={button} href="tinyurl.com/MdTaquiImam">
              Share your idea
            </Link>
          </Section>
        
        </Section>
      </Container>

      <Section style={footer}>
        <Text style={footerText}>
          You&#x27;re receiving this email because your Subscried devletter.
        </Text>

        <Link href="/" style={footerLink}>
          Unsubscribe from emails like this{" "}
        </Link>
        <Link href="tinyurl.com/MdTaquiImam" style={footerLink}>
          Edit email settings{" "}
        </Link>
        <Link href="tinyurl.com/MdTaquiImam" style={footerLink}>
          Contact us
        </Link>
        <Link href="tinyurl.com/MdTaquiImam" style={footerLink}>
          Privacy
        </Link>

        <Hr style={footerDivider} />

        <Img width={111} src={`https://firebasestorage.googleapis.com/v0/b/projectfriendz-45b49.appspot.com/o/images%2FdevletterTransLogo.png?alt=media&token=c2452106-93fb-4642-80da-76fd23319cf8`} />
        <Text style={footerAddress}>
          <strong>Devletter</strong>, Weeklky newsletter for devs.
        </Text>
        <Text style={footerHeart}>{"💌"}</Text>
      </Section>
    </Body>
  </Html>
);

export default ThankyouEmail;

const main = {
  backgroundColor: "#f3f3f5",
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
};

const headerContent = { padding: "20px 30px 15px" };

const headerContentTitle = {
  color: "#fff",
  fontSize: "27px",
  fontWeight: "bold",
  lineHeight: "27px",
};



const headerImageContainer = {
  padding: "30px 10px",
};

const title = {
  margin: "0 0 15px",
  fontWeight: "bold",
  fontSize: "21px",
  lineHeight: "21px",
  color: "#0c0d0e",
};

const paragraph = {
  fontSize: "15px",
  lineHeight: "21px",
  color: "#3c3f44",
};

const divider = {
  margin: "30px 0",
};

const container = {
  maxWidth: "680px",
  width: "100%",
  margin: "0 auto",
  backgroundColor: "#ffffff",
};

const footer = {
  width: "680px",
  margin: "32px auto 0 auto",
  padding: "0 30px",
};

const content = {
  padding: "30px 30px 40px 30px",
};

const logo = {
  display: "flex",
  background: "#f3f3f5",
  padding: "20px 30px",
};

const header = {
  borderRadius: "5px 5px 0 0",
  display: "flex",
  flexDireciont: "column",
  backgroundColor: "#030712",
};

const buttonContainer = {
  marginTop: "24px",
  display: "block",
};

const button = {
  backgroundColor: "#030712",
  border: "1px solid #0077cc",
  fontSize: "17px",
  lineHeight: "17px",
  padding: "13px 17px",
  borderRadius: "4px",
  maxWidth: "120px",
  color: "#fff",
};

const footerDivider = {
  ...divider,
  borderColor: "#d6d8db",
};

const footerText = {
  fontSize: "12px",
  lineHeight: "15px",
  color: "#9199a1",
  margin: "0",
};

const footerLink = {
  display: "inline-block",
  color: "#9199a1",
  textDecoration: "underline",
  fontSize: "12px",
  marginRight: "10px",
  marginBottom: "0",
  marginTop: "8px",
};

const footerAddress = {
  margin: "4px 0",
  fontSize: "12px",
  lineHeight: "15px",
  color: "#9199a1",
};

const footerHeart = {
  borderRadius: "1px",
  border: "1px solid #d6d9dc",
  padding: "4px 6px 3px 6px",
  fontSize: "11px",
  lineHeight: "11px",
  fontFamily: "Consolas,monospace",
  color: "#e06c77",
  maxWidth: "min-content",
  margin: "0 0 32px 0",
};
