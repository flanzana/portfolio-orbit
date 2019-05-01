// import React framework
import React from 'react';

// import Orbit defaultTokens (for colors, etc.)
// list of all tokens on: https://orbit.kiwi/design-tokens
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

// import Orbit components
// list of all components on: https://orbit.kiwi/components and https://kiwicom.github.io/orbit-components/?path=/story
import Stack from "@kiwicom/orbit-components/lib/Stack";
import Text from "@kiwicom/orbit-components/lib/Text";
import TextLink from "@kiwicom/orbit-components/lib/TextLink";
import Button from "@kiwicom/orbit-components/lib/Button";
import Heading from "@kiwicom/orbit-components/lib/Heading";
import Card, { CardHeader, CardSection, CardSectionHeader, CardSectionContent } from "@kiwicom/orbit-components/lib/Card";
import Badge from "@kiwicom/orbit-components/lib/Badge";
import Table, { TableHead, TableBody, TableRow, TableCell } from "@kiwicom/orbit-components/lib/Table";
import List, { ListItem } from "@kiwicom/orbit-components/lib/List";

// import Orbit icons
// list of all icons on: https://kiwicom.github.io/orbit-components/?path=/story/icon--list-of-all-icons
import GenderWoman from "@kiwicom/orbit-components/lib/icons/GenderWoman";
import Chart from "@kiwicom/orbit-components/lib/icons/Chart";
import City from "@kiwicom/orbit-components/lib/icons/City";
import Sightseeing from "@kiwicom/orbit-components/lib/icons/Sightseeing";
import Entertainment from "@kiwicom/orbit-components/lib/icons/Entertainment";
import Anywhere from "@kiwicom/orbit-components/lib/icons/Anywhere";
import DeviceDesktop from "@kiwicom/orbit-components/lib/icons/DeviceDesktop";
import Map from "@kiwicom/orbit-components/lib/icons/Map"
import Sports from "@kiwicom/orbit-components/lib/icons/Sports"
import Email from "@kiwicom/orbit-components/lib/icons/Email";
import Linkedin from "@kiwicom/orbit-components/lib/icons/Linkedin";
import Twitter from "@kiwicom/orbit-components/lib/icons/Twitter";
import Code from "@kiwicom/orbit-components/lib/icons/Code";

// your website
function App() {
  return (
    <div style={{
      width: "100%",
      margin: 0,
      backgroundColor: defaultTokens.paletteCloudLight,
    }}>
      {/* ------------------------------------------------- HEADER ------------------------------------------------- */}
      <div style={{ // inline CSS
        minHeight: "100px",
        backgroundColor: defaultTokens.paletteProductNormalActive,
        display: "flex",
        alignItems: "center"
      }}>
        <Stack direction="column" spacing="tight" align="center" /* Stack is like CSS flexbox container */>
        <Heading
          element="h1"
          type="display" // size
          inverted // white color
        >
          ŽANA FLANDER
        </Heading>
          <Text type="white">Frontend Developer</Text>
        </Stack>
      </div>
      {/* ---------- end of header ---------- */}

      {/* ------------------------------------------------- MAIN ------------------------------------------------- */}
      <div style={{
        padding: "30px 20px",
        maxWidth: "700px",
        margin: "0 auto",
      }}>
        <Stack direction="column">

          {/* ----------------------------- ABOUT ME ----------------------------- */}
          <Card>
            <CardHeader
              title="ABOUT ME"
              icon={<GenderWoman />}
            />
            <CardSection>
              <Stack>
                <Text>
                  Hi! My name is Žana Flander from Slovenia and I am passionate about frontend web development and
                  cartography. I gained expertise in cartography, GIS, land surveying, frontend web development and customer
                  service. I am fluent in English, Slovenian and Spanish. I have studied and worked abroad. My full work
                  experience and education can be seen on <TextLink href="https://www.linkedin.com/in/zanaflander" external>my
                  LinkedIn profile</TextLink>. My hobbies are yoga, volleyball and chess. I am always eager to
                  learn and engage in new things.
                </Text>
                <Stack direction="row" spacing="condensed" wrap>
                  <Badge
                    type="info"
                    icon={<DeviceDesktop />}
                  >
                    Frontend
                  </Badge>
                  <Badge
                    type="success"
                    icon={<Anywhere />}
                  >
                    Cartography
                  </Badge>
                  <Badge
                    type="success"
                    icon={<Anywhere />}
                  >
                    GIS
                  </Badge>
                </Stack>
              </Stack>
            </CardSection>
          </Card>
          {/* ---------- end of About me ---------- */}

          {/* ----------------------------- SKILLS ----------------------------- */}
          <Card>
            <CardHeader
              title="SKILLS"
              icon={<Chart />}
            />
            <CardSection>
              <Stack direction="column" spacing="comfy" largeMobile={{ direction: "row", spacing: "natural" }}>
                <Table compact>
                  <TableHead>
                    <TableRow>
                      <TableCell>Language</TableCell>
                      <TableCell>Level</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>Slovenian</TableCell>
                      <TableCell>Native</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>English</TableCell>
                      <TableCell>C1</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Spanish</TableCell>
                      <TableCell>B2</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>

                <Table compact>
                  <TableHead>
                    <TableRow>
                      <TableCell>Development</TableCell>
                      <TableCell>Level</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>CSS</TableCell>
                      <TableCell>5</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Git</TableCell>
                      <TableCell>4</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>HTML</TableCell>
                      <TableCell>5</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>JavaScript</TableCell>
                      <TableCell>3</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Python</TableCell>
                      <TableCell>1</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>ReactJS</TableCell>
                      <TableCell>4</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Redux</TableCell>
                      <TableCell>2</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>SQL</TableCell>
                      <TableCell>2</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>

                <Table compact>
                  <TableHead>
                    <TableRow>
                      <TableCell>Engineering</TableCell>
                      <TableCell>Level</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>ArcGIS</TableCell>
                      <TableCell>5</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>AutoCAD</TableCell>
                      <TableCell>3</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>MATLAB</TableCell>
                      <TableCell>3</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>OCAD</TableCell>
                      <TableCell>5</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>QGIS</TableCell>
                      <TableCell>4</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>SketchUp</TableCell>
                      <TableCell>2</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Stack>
            </CardSection>
          </Card>
          {/* ---------- end of Skills ---------- */}

          {/* ----------------------------- WORK EXPERIENCE ----------------------------- */}
          <Card>
            <CardHeader
              title="WORK EXPERIENCE"
              icon={<City />}
            />

            <CardSection expandable>
              <CardSectionHeader>
                <Stack direction="row" align="center" justify="between">
                  <Stack direction="column" spacing="tight" grow={false} shrink>
                    <Heading element="h4" type="title5">Junior Frontend Developer</Heading>
                    <Text type="secondary" size="small">Kiwi.com</Text>
                  </Stack>
                  <Text type="secondary" size="small" align="right">2018-Present</Text>
                </Stack>
              </CardSectionHeader>
              <CardSectionContent>
                <Stack direction="column">
                  <Stack direction="row" spacing="condensed" wrap>
                    <Badge type="info">ReactJS</Badge>
                    <Badge type="info">styled-components</Badge>
                    <Badge type="info">Design system Orbit</Badge>
                    <Badge type="info">JavaScript</Badge>
                    <Badge type="info">Redux</Badge>
                  </Stack>
                  <Text>Some description of this work position (tasks, etc.).</Text>
                </Stack>
              </CardSectionContent>
            </CardSection>

            <CardSection expandable>
              <CardSectionHeader>
                <Stack direction="row" align="center" justify="between">
                  <Stack direction="column" spacing="tight" grow={false} shrink>
                    <Heading element="h4" type="title5">Order Processing Specialist</Heading>
                    <Text type="secondary" size="small">Kiwi.com</Text>
                  </Stack>
                  <Text type="secondary" size="small" align="right">2017-2018</Text>
                </Stack>
              </CardSectionHeader>
              <CardSectionContent>
                <Stack direction="column">
                  <Stack direction="row" spacing="condensed" wrap>
                    <Badge type="warning">Customer Service</Badge>
                    <Badge type="warning">Bookings</Badge>
                    <Badge type="warning">Communication</Badge>
                  </Stack>
                  <Text>Some description of this work position (tasks, etc.).</Text>
                </Stack>
              </CardSectionContent>
            </CardSection>

            <CardSection expandable>
              <CardSectionHeader>
                <Stack direction="row" align="center" justify="between">
                  <Stack direction="column" spacing="tight" grow={false} shrink>
                    <Heading element="h4" type="title5">GIS Specialist</Heading>
                    <Text type="secondary" size="small">Alpdest</Text>
                  </Stack>
                  <Text type="secondary" size="small" align="right">2017</Text>
                </Stack>
              </CardSectionHeader>
              <CardSectionContent>
                <Stack direction="column">
                  <Stack direction="row" spacing="condensed" wrap>
                    <Badge type="success">QGIS</Badge>
                    <Badge type="success">OpenStreetMap</Badge>
                  </Stack>
                  <Text>Some description of this work position (tasks, etc.).</Text>
                </Stack>
              </CardSectionContent>
            </CardSection>

            <CardSection expandable>
              <CardSectionHeader>
                <Stack direction="row" align="center" justify="between">
                  <Stack direction="column" spacing="tight" grow={false} shrink>
                    <Heading element="h4" type="title5">Land Surveyor</Heading>
                    <Text type="secondary" size="small">Urban Institute of Ljubljana</Text>
                  </Stack>
                  <Text type="secondary" size="small" align="right">2016</Text>
                </Stack>
              </CardSectionHeader>
              <CardSectionContent>
                <Stack direction="column">
                  <Stack direction="row" spacing="condensed" wrap>
                    <Badge type="success">Land surveying</Badge>
                    <Badge type="success">Cadastre</Badge>
                    <Badge type="success">GPS</Badge>
                    <Badge type="success">AutoCAD</Badge>
                  </Stack>
                  <Text>Some description of this work position (tasks, etc.).</Text>
                </Stack>
              </CardSectionContent>
            </CardSection>

            <CardSection expandable>
              <CardSectionHeader>
                <Stack direction="row" align="center" justify="between">
                  <Stack direction="column" spacing="tight" grow={false} shrink>
                    <Heading element="h4" type="title5">Cartographer</Heading>
                    <Text type="secondary" size="small">National Geographic Institute of Spain</Text>
                  </Stack>
                  <Text type="secondary" size="small" align="right">2016</Text>
                </Stack>
              </CardSectionHeader>
              <CardSectionContent>
                <Stack direction="column">
                  <Stack direction="row" spacing="condensed" wrap>
                    <Badge type="success">Cartography</Badge>
                    <Badge type="success">Topographic map</Badge>
                    <Badge type="success">MicroStation</Badge>
                  </Stack>
                  <Text>Some description of this work position (tasks, etc.).</Text>
                </Stack>
              </CardSectionContent>
            </CardSection>

            <CardSection expandable>
              <CardSectionHeader>
                <Stack direction="row" align="center" justify="between">
                  <Stack direction="column" spacing="tight" grow={false} shrink>
                    <Heading element="h4" type="title5">GIS Technician</Heading>
                    <Text type="secondary" size="small">Geodetic Institute of Slovenia</Text>
                  </Stack>
                  <Text type="secondary" size="small" align="right">2015</Text>
                </Stack>
              </CardSectionHeader>
              <CardSectionContent>
                <Stack direction="column">
                  <Stack direction="row" spacing="condensed" wrap>
                    <Badge type="success">GIS</Badge>
                    <Badge type="success">Land use</Badge>
                    <Badge type="success">Mapping</Badge>
                  </Stack>
                  <Text>Some description of this work position (tasks, etc.).</Text>
                </Stack>
              </CardSectionContent>
            </CardSection>
          </Card>
          {/* ---------- end of Work experience ---------- */}

          {/* ----------------------------- EDUCATION ----------------------------- */}
          <Card>
            <CardHeader
              title="EDUCATION"
              icon={<Sightseeing />}
            />

            <CardSection expandable>
              <CardSectionHeader>
                <Stack direction="row" align="center" justify="between">
                  <Stack direction="column" spacing="tight" grow={false} shrink>
                    <Heading element="h4" type="title5">Frontend Web Development</Heading>
                    <Text type="secondary" size="small">Udacity</Text>
                  </Stack>
                  <Text type="secondary" size="small" align="right">2018</Text>
                </Stack>
              </CardSectionHeader>
              <CardSectionContent>
                <Stack direction="column">
                  <Stack direction="row" spacing="condensed" wrap>
                    <Badge type="info">HTML</Badge>
                    <Badge type="info">CSS</Badge>
                    <Badge type="info">Git</Badge>
                    <Badge type="info">JavaScript</Badge>
                    <Badge type="info">jQuery</Badge>
                    <Badge type="info">ReactJS</Badge>
                  </Stack>
                  <Text>Some description of this study degree.</Text>
                </Stack>
              </CardSectionContent>
            </CardSection>

            <CardSection expandable>
              <CardSectionHeader>
                <Stack direction="row" align="center" justify="between">
                  <Stack direction="column" spacing="tight" grow={false} shrink>
                    <Heading element="h4" type="title5">Cartography and Geoinformatics</Heading>
                    <Text type="secondary" size="small">Warsaw University of Technology</Text>
                  </Stack>
                  <Text type="secondary" size="small" align="right">2015</Text>
                </Stack>
              </CardSectionHeader>
              <CardSectionContent>
                <Stack direction="column">
                  <Stack direction="row" spacing="condensed" wrap>
                    <Badge type="success">Cartography</Badge>
                    <Badge type="success">GIS</Badge>
                    <Badge type="success">ArcGIS</Badge>
                  </Stack>
                  <Text>Some description of this study degree.</Text>
                </Stack>
              </CardSectionContent>
            </CardSection>

            <CardSection expandable>
              <CardSectionHeader>
                <Stack direction="row" align="center" justify="between">
                  <Stack direction="column" spacing="tight" grow={false} shrink>
                    <Heading element="h4" type="title5">Geodesy and Geoinformatics</Heading>
                    <Text type="secondary" size="small">University of Ljubljana</Text>
                  </Stack>
                  <Text type="secondary" size="small" align="right">2010-2016</Text>
                </Stack>
              </CardSectionHeader>
              <CardSectionContent>
                <Stack direction="column">
                  <Stack direction="row" spacing="condensed" wrap>
                    <Badge type="success">Land surveying</Badge>
                    <Badge type="success">Geodesy</Badge>
                    <Badge type="success">Cartography</Badge>
                    <Badge type="success">GIS</Badge>
                    <Badge type="success">Remote sensing</Badge>
                    <Badge type="success">ArcGIS</Badge>
                    <Badge type="success">OCAD</Badge>
                    <Badge type="success">MATLAB</Badge>
                  </Stack>
                  <Text>Some description of this study degree.</Text>
                </Stack>
              </CardSectionContent>
            </CardSection>
          </Card>
          {/* ---------- end of Education ---------- */}

          {/* ----------------------------- PROJECTS ----------------------------- */}
          <Card>
            <CardHeader
              title="PROJECTS"
              icon={<Entertainment />}
            />
            <CardSection>
              <List>
                <ListItem icon={<Map />}>
                  <TextLink
                    href="https://flanzana.github.io/almeria-map"
                    type="secondary"
                    external // opens page in new tab
                  >
                    Almeria neighbourhood map
                  </TextLink>
                </ListItem>
                <ListItem icon={<Sports />}>
                  <TextLink
                    href="https://flanzana.github.io/memory-game-zana"
                    type="secondary"
                    external
                  >
                    Memory game
                  </TextLink>
                </ListItem>
                <ListItem icon={<Sports />}>
                  <TextLink
                    href="https://flanzana.github.io/arcade-game"
                    type="secondary"
                    external
                  >
                    Arcade game Frogger
                  </TextLink>
                </ListItem>
              </List>
            </CardSection>
          </Card>
          {/* ---------- end of Projects ---------- */}

        </Stack>
      </div>
      {/* ---------- end of main ---------- */}

      {/* ------------------------------------------------- FOOTER ------------------------------------------------- */}
      <div style={{
        minHeight: "120px",
        backgroundColor: defaultTokens.paletteProductNormalActive,
        display: "flex",
        alignItems: "center"
      }}>
        <Stack direction="column" align="center" justify="center">
          <Stack direction="row" justify="center">
            <Button
              iconLeft={<Linkedin customColor={defaultTokens.paletteProductNormalActive} />}
              circled
              type="white"
              href="https://www.linkedin.com/in/zanaflander"
              external
            />
            <Button
              iconLeft={<Code customColor={defaultTokens.paletteProductNormalActive} />}
              circled
              type="white"
              href="https://github.com/flanzana"
              external
            />
            <Button
              iconLeft={<Twitter customColor={defaultTokens.paletteProductNormalActive} />}
              circled
              type="white"
              href="https://twitter.com/flanzana"
              external
            />
            <Button
              iconLeft={<Email customColor={defaultTokens.paletteProductNormalActive} />}
              circled
              type="white"
              href="mailto:zana.flander@kiwi.com"
              external
            />
          </Stack>
          <Text size="small" type="white" align="center">
            Coded and designed with ❤ by Žana and <TextLink type="secondary" href="https://orbit.kiwi/" external>Kiwi.com's design system Orbit</TextLink>
          </Text>
        </Stack>
      </div>
      {/* ---------- end of footer ---------- */}

    </div>
  );
}

export default App;
