import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import Carousel from "react-bootstrap/Carousel";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";
import FigureImage from "react-bootstrap/FigureImage";
import FigureCaption from "react-bootstrap/FigureCaption";
import "./Picture.css";
import LikedMessages from "../components/likedMessages/LikedMessages";

class Picture extends React.Component {
  render() {
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <Row>
          <Col>
            <div className="Images">
              <Carousel className="Carousel">
                <Carousel.Item>
                  <img
                    className="Bat"
                    src="https://ultimate.hydra-lister.com/uploads/images/ebay/paladone_dc_comics_batman_rubber_bath_4668_0.jpg"
                    alt="Bat Duck"
                  />
                  <Carousel.Caption>
                    <h3>Bat Duck</h3>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="Spider"
                    src="https://amsterdamduckstore.com/wp-content/uploads/2015/08/spidy-rubber-duck-leaning.jpg"
                    alt="Spider Duck"
                  />

                  <Carousel.Caption>
                    <h3>Spider Duck</h3>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="Baby"
                    src="https://th.bing.com/th/id/OIP.3IjOFxr_bOJ_Pi8ZpLgktQHaHa?pid=Api&rs=1"
                    alt="Baby Duck"
                  />

                  <Carousel.Caption>
                    <h3>Baby Duck</h3>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="Clown"
                    src="https://www.amsterdamduckstore.com/wp-content/uploads/2015/07/clown-rubber-duck-leaning.jpg"
                    alt="Clown Duck"
                  />
                  <Carousel.Caption>
                    <h3>Clown Duck</h3>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="Statue"
                    src="https://i1.wp.com/www.amsterdamduckstore.com/wp-content/uploads/2017/07/My-Toothie-Duck-Liberty-Amsterdam-Duck-Store.jpg?resize=400%2C400&ssl=1"
                    alt="Statue Of Liberty Duck"
                  />

                  <Carousel.Caption>
                    <h5>Statue Of Liberty Duck</h5>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="Spock"
                    src="https://i.pinimg.com/736x/f4/6a/27/f46a27127f007494ccce543ee7c7cc9e--duck-costumes-bath-toys.jpg"
                    alt="Spock Duck"
                  />

                  <Carousel.Caption>
                    <h3>Spock Duck</h3>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="Kiss"
                    src="http://i1.wp.com/theverybesttop10.com/wp-content/uploads/2015/01/Top-10-Funny-and-Unusual-Rubber-Ducks-6.jpg?resize=510%2C554"
                    alt="Kiss Duck"
                  />
                  <Carousel.Caption>
                    <h3>Kiss Duck</h3>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="RuPaul"
                    src="https://celebriducks.com/wp-content/uploads/2019/11/rupond-custom-rubber-duck.jpg"
                    alt="RuPaul Duck"
                  />

                  <Carousel.Caption>
                    <h3>RuPaul Duck</h3>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="Shaq"
                    src="https://i.pinimg.com/originals/ce/a4/18/cea418af234e6dd64c98b7b9c1c8ad91.jpg"
                    alt="Shaq Duck"
                  />

                  <Carousel.Caption>
                    <h3>Shaq Duck</h3>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="Blue"
                    src="http://www.celebriducks.com/Large%20pics/blues.jpg"
                    alt="Blues Brothers Ducks"
                  />
                  <Carousel.Caption>
                    <h5>Blues Brothers Ducks</h5>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="Madonna"
                    src="https://i.pinimg.com/736x/05/b9/fb/05b9fb152f1c2f9a6a86a9d03c161bfb.jpg"
                    alt="Madonna Duck"
                  />

                  <Carousel.Caption>
                    <h3>Madonna Duck</h3>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="Santa"
                    src="https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/1280x1280/products/759/7557/Christams-Santa-Gifts-Rubber-Duck-Lanco-2__70188.1556813947.jpg?c=2&imbypass=on"
                    alt="Santa Duck"
                  />

                  <Carousel.Caption>
                    <h3>Santa Duck</h3>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="Tree"
                    src="https://www.amsterdamduckstore.com/wp-content/uploads/2015/07/X-mas-tree-rubber-duck-front.jpg"
                    alt="Chritmas Tree Duck"
                  />
                  <Carousel.Caption>
                    <h5>Christmas Tree Duck</h5>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="Snow"
                    src="https://i.ebayimg.com/images/i/141423077756-0-1/s-l1000.jpg"
                    alt="Snow Man Duck"
                  />

                  <Carousel.Caption>
                    <h4>Snow Man Duck</h4>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="Cow"
                    src="https://cdn.shopify.com/s/files/1/1114/0068/products/LI1595-2_1024x1024.jpeg?v=1453735876"
                    alt="Cow Duck"
                  />

                  <Carousel.Caption>
                    <h3>Cow Duck</h3>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="Cat"
                    src="https://www.amsterdamduckstore.com/wp-content/uploads/2015/07/cat-rubber-duck-front.jpg"
                    alt="Cat Duck"
                  />
                  <Carousel.Caption>
                    <h3>Cat Duck</h3>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="Horse"
                    src="http://cdn.shopify.com/s/files/1/1114/0068/products/1975_Pferd_Quietscheente_design_by_LILALU_-_Frontseite_1024x1024.png?v=1502041679"
                    alt="Horse Duck"
                  />

                  <Carousel.Caption>
                    <h3>Horse Duck</h3>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="Unicorn"
                    src="https://www.ebuy-gb.co.uk/ekmps/shops/9a1a96/images/unicorn-rubber-duck-purple-pack-1--6045-p.jpg"
                    alt="Unicorn Duck"
                  />

                  <Carousel.Caption>
                    <h3>Unicorn Duck</h3>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="Harley"
                    src="https://bluebananastatic-ooxqkrt4ejgeg.stackpathdns.com/shopimages/products/normal/124664_v2.jpg"
                    alt="Harley Quinn Duck"
                  />
                  <Carousel.Caption>
                    <h4>Harley Quinn Duck</h4>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="Joker"
                    src="https://www.eggtech.gr/images/product/Tubbz_Official_DC_Comics_Merchandise__Joker_Duck_Character_Figurine-1.jpeg"
                    alt="Joker Duck"
                  />

                  <Carousel.Caption>
                    <h3>Joker Duck</h3>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="Pumpkin"
                    src="https://www.garrettspecialties.com/images/products/pumpkin-rubber-duck-3-1355-306705.jpg"
                    alt="Pumpkin Duck"
                  />

                  <Carousel.Caption>
                    <h3>Pumkin Duck</h3>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="Rudolph"
                    src="https://www.amsterdamduckstore.com/wp-content/uploads/2015/10/rendeer-rubber-duck-front.jpg"
                    alt="Rudolph Duck"
                  />
                  <Carousel.Caption>
                    <h4>Rudolph Duck</h4>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="Prince"
                    src="https://cdn11.bigcommerce.com/s-nf2x4/products/174/images/8628/1999-Rubber-Celebriducks-2__07381.1568053814.560.850.jpg?c=2"
                    alt="Prince Duck"
                  />

                  <Carousel.Caption>
                    <h3>Prince Ducky</h3>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="Devil"
                    src="https://cdn.shopify.com/s/files/1/2046/8557/products/archie-mcphee-devil-duckie-bath-toy-yellow-octopus-30791556106_2000x2000.jpg?v=1508264549"
                    alt="Devil Duck"
                  />

                  <Carousel.Caption>
                    <h3>Devil Duck</h3>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="Frankenstein"
                    src="https://amsterdamduckstore.com/wp-content/uploads/2018/10/Frankenstein-rubber-duck-front-Amsterdam-Duck-Store.jpg"
                    alt="Franken Ducky"
                  />
                  <Carousel.Caption>
                    <h4>Franken Ducky</h4>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="Dragon"
                    src="https://i5.walmartimages.com/asr/42155be4-98a7-41fd-8819-4f069ec18642_1.39cf8f28022163ba8624e2f015fdfca5.jpeg"
                    alt="Blue Dragon Duck"
                  />
                  <Carousel.Caption>
                    <h5>Blue Dragon Duck</h5>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="Octopus"
                    src="https://i.pinimg.com/originals/d3/b2/2b/d3b22b06b5f4aeeca852769bf972665b.png"
                    alt="Octopus Duck"
                  />
                  <Carousel.Caption>
                    <h3>Octopus Duck</h3>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="Pirate"
                    src="https://cdn.shopify.com/s/files/1/0604/4801/products/Pirate_1_b0a169e0-feba-450d-b81b-f3db5703c7d4.jpeg?v=1514697320"
                    alt="Pirate Duck"
                  />
                  <Carousel.Caption>
                    <h3>Pirate Duck</h3>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="Shakespeare"
                    src="https://cdn.shopify.com/s/files/1/1114/0068/products/Y-DUCK-SHAKESPEARE-2_1024x1024.jpeg?v=1453744124"
                    alt="Shakespeare Duck"
                  />

                  <Carousel.Caption>
                    <h4>Shakespeare Duck</h4>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="Super"
                    src="https://images-eu.ssl-images-amazon.com/images/I/411rT2MlJ8L._SL500_AC_SS350_.jpg"
                    alt="Super Duck"
                  />
                  <Carousel.Caption>
                    <h3>Super Duck</h3>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="Elvis"
                    src="https://cdn.shopify.com/s/files/1/0604/4801/products/Elvis_1-min-min.jpg?v=1524977157"
                    alt="Elvis Duck"
                  />
                  <Carousel.Caption>
                    <h3>Elvis Duck</h3>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="Turtle"
                    src="https://i5.walmartimages.com/asr/def73ed1-f7af-487a-ac20-050661c541ef_1.3113a3c04ff3ca0668a6e588150140bf.jpeg"
                    alt="Turtle Duck"
                  />
                  <Carousel.Caption>
                    <h3>Turtle Duck</h3>
                    <p></p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
          <Col>
            <Figure>
              <FigureImage
                className="Duck"
                alt="171x180"
                src="https://www.smbc-comics.com/comics/1479484954-20161118%20(1).png"
              />
              <FigureCaption className="Rubber">
                <h3>Rubber Ducking</h3>
              </FigureCaption>
            </Figure>
          </Col>
          <Col>
            <LikedMessages />
          </Col>
        </Row>
      </div>
    );
  }
}

export default userIsAuthenticated(Picture);
