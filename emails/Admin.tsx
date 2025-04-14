import { Body, Container, Head, Heading, Hr, Html, Section, Img, Text } from "@react-email/components";


export default function AdminTemplate({ email, level, quantity, airdrop, network, address }: EmailProps) {
    return (
        <Html>
            <Head />
            <Body style={{ backgroundColor: "#fff", color: "#3C3842" }}>
                <Container style={{ padding: "20px", margin: "0 auto", backgroundColor: "#E0E0E0" }}>
                    <Section style={{ backgroundColor: "#fff" }}>
                        <Section style={{ backgroundColor: "#5E2CA5", textAlign: "center", padding: "20px 0" }}>
                            <Img src="https://res.cloudinary.com/dpmx02shl/image/upload/v1744617375/logo_rn1atz.png" width="50" height="50" alt="ExtraOrdinaire Talent Logo" style={{ display: "block", margin: "0 auto" }} />
                        </Section>
                        <Section style={{ padding: "25px 35px" }}>
                            <Heading style={{ color: "#121212", fontSize: "22px", fontWeight: "bold" }}>New Registration</Heading>
                            <Text style={{ fontSize: "16px", marginBottom: "14px" }}>
                                A user with the following details below, just registered in your website:
                            </Text>
                            <Text style={{ fontSize: "14px", marginBottom: "6px" }}>
                                User Email: {email}
                            </Text>
                            <Text style={{ fontSize: "14px", marginBottom: "6px" }}>
                                Blockchain Liquidity Level: {level}
                            </Text>
                            <Text style={{ fontSize: "14px", marginBottom: "6px" }}>
                                Airdrop Quantity: {quantity}
                            </Text>
                            <Text style={{ fontSize: "14px", marginBottom: "6px" }}>
                                Mining Airdrop Wallet: {airdrop}
                            </Text>
                            <Text style={{ fontSize: "14px", marginBottom: "6px" }}>
                                Minereum Network: {network}
                            </Text>
                            <Text style={{ fontSize: "14px", marginBottom: "6px" }}>
                                Minereum Wallet Address: {address}
                            </Text>
                            <Hr style={{ borderColor: "#E0E0E0", margin: "16px 0" }} />
                        </Section>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}