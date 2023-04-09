import React, { useState } from "react";
import "./BodyHeader.scss";
import sideBar from "../../assets/icons/sideBar.png";
import { Link } from "react-router-dom";

const BodyHeader = () => {
  const [sideBarShow, setSideBarShow] = useState(false);
  return (
    <div className="body-header">
      <img
        src="https://img.freepik.com/premium-vector/word-concept-color-geometric-shapes-blog_205544-12899.jpg"
        alt=""
      />
      <div className="menu">
        <div className="menu-side-bar">
          <button onClick={() => setSideBarShow(true)}>
            <img src={sideBar} alt="" />
          </button>
        </div>
        <div className="menu-list">
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="life-style">LIFE STYLE</Link>
            </li>
            <li>
              <Link to="fashion">FASHION</Link>
            </li>
            <li>
              <Link to="travel">TRAVVEL</Link>
            </li>
            <li>
              <Link to="post-formats">POST FORMATS</Link>
            </li>
            <li>
              <Link to="blog">BLOG</Link>
            </li>
          </ul>
        </div>
        <div className="search-icon">
          <button>
            <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
          </button>
          <div className="search-form">
            <input type="search" />
            <button>
              <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </div>
      {sideBarShow && (
        <div className="sideBar">
          <div className="wraper">
            <div className="close-icon">
              <button onClick={() => setSideBarShow(false)}>
                <i className="fa-solid fa-xmark"></i>
                <i className="fa-solid fa-minus"></i>
              </button>
            </div>
            <div className="img-tt">
              <img
                src="https://media.gettyimages.com/id/1262582505/photo/young-asian-woman-with-protective-face-mask-with-shopping-cart-basket-in-supermarket-inside.jpg?s=612x612&w=gi&k=20&c=TSGw02lHerHheolwnq_42lYUVWx28z5rARiH5wTSMoQ="
                alt=""
              />
            </div>
            <div className="category">
              <div className="item">
                <span>Life style</span>
                <span>12</span>
              </div>
              <div className="item">
                <span>Travel</span>
                <span>12</span>
              </div>
              <div className="item">
                <span>Video</span>
                <span>12</span>
              </div>
            </div>
            <div className="most-po">
              <div className="most-blog">
                <img
                  src="https://images.ctfassets.net/ydv6sq0kb5bw/3hoY0rEVb7PEjtLI9VVqPW/26c7fe1dc8bf3654bcab400afa882f43/shutterstock_2060410730__1_.jpg?fit=fill&q=75&fm=webp&w=1920&h=1111"
                  alt=""
                />
                <div className="title">
                  <p>
                    A lifestyle typically reflects an individual’s attitudes
                  </p>
                </div>
                <div className="ca-s-date">
                  <span>Travel</span>
                  <span>AUGUST 11, 2018</span>
                </div>
              </div>
            </div>

            <div className="item-area-most">
              <div className="item">
                <img
                  src="https://magazine.zozothemes.com/weets/wp-content/uploads/sites/17/2018/08/tech_news10-1-1-95x90.jpg"
                  alt=""
                />
                <p>Many Android devices ship with firmware researchers find</p>
              </div>
              <div className="item">
                <img
                  src="https://magazine.zozothemes.com/weets/wp-content/uploads/sites/17/2018/08/tech_news10-1-1-95x90.jpg"
                  alt=""
                />
                <p>Many Android devices ship with firmware researchers find</p>
              </div>
              <div className="item">
                <img
                  src="https://magazine.zozothemes.com/weets/wp-content/uploads/sites/17/2018/08/tech_news10-1-1-95x90.jpg"
                  alt=""
                />
                <p>Many Android devices ship with firmware researchers find</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eveniet sequi recusandae, et incidunt labore accusamus
                  praesentium aliquid illo omnis, ut corrupti ipsam, tenetur sit
                  natus beatae ipsum placeat molestiae harum eaque animi aperiam
                  obcaecati sed numquam iure. Autem eum incidunt sed rerum
                  voluptas atque nostrum fugit possimus qui veritatis non nihil
                  itaque minima, asperiores deserunt maxime sint cumque eveniet!
                  Repellat officia amet expedita necessitatibus! Voluptatum
                  fugiat fuga laborum earum reiciendis nisi numquam dolorem
                  pariatur amet autem facilis, cumque placeat, commodi quidem!
                  Quod ipsam voluptatibus cupiditate voluptatum voluptate
                  explicabo, vel esse rerum corporis architecto soluta
                  excepturi. Omnis quisquam dolorum dignissimos tenetur
                  provident ad dolor nobis, ullam ducimus maxime quo, earum
                  inventore odio. Facere laboriosam officia quibusdam, vel
                  inventore consequuntur adipisci voluptatum veniam harum optio
                  amet sint quaerat quisquam necessitatibus at similique
                  expedita soluta. Fugiat blanditiis voluptatem laborum harum
                  impedit maiores, saepe aut voluptates doloremque ut aliquam
                  dignissimos et eius inventore veniam omnis officiis deleniti!
                  Nesciunt quod blanditiis sint repudiandae soluta, nemo
                  adipisci, doloribus asperiores suscipit non perspiciatis. Est
                  adipisci exercitationem voluptas ipsa odio sint, totam nisi
                  minima sunt asperiores rem dolorum hic, ab a quas. Facere
                  animi aut possimus dolorem quos officia, magnam enim et
                  quaerat veritatis debitis, repellendus corrupti cupiditate hic
                  facilis iste cum sapiente? Quasi dolore, illo omnis amet
                  voluptatem necessitatibus consequuntur accusamus porro?
                  Provident veritatis nostrum repellat sapiente maxime quam quia
                  iusto soluta laborum, nihil eaque tempore natus nulla mollitia
                  possimus modi quisquam facere, tempora deserunt dolores porro
                  animi impedit molestias. Quos, explicabo doloribus in,
                  distinctio nihil quo, veritatis et numquam sequi obcaecati
                  fugit! Voluptas nobis harum tenetur explicabo fugiat ducimus
                  alias totam possimus incidunt labore nesciunt iure, impedit
                  dolorum odit quam error expedita cum! Sunt tempora voluptate
                  doloremque ducimus ad numquam, expedita iure alias dolores,
                  omnis vero hic laboriosam sapiente iste id repudiandae
                  explicabo ut sed ea officiis vel nesciunt et! Perferendis vel
                  porro iusto optio, sapiente nesciunt, odio numquam amet eos
                  eum minima culpa voluptatum adipisci. Quisquam consectetur
                  deserunt fugit, nemo ea error suscipit minus eligendi voluptas
                  laborum. Quia sint, expedita sit voluptatibus unde
                  necessitatibus aut debitis sed totam eligendi explicabo
                  commodi, quas officiis nesciunt animi dignissimos aliquid
                  ratione exercitationem dolores voluptatem, odio velit tempora
                  dicta! Doloribus eveniet voluptatem error fugit asperiores
                  quia vero magnam impedit aliquam eligendi commodi autem
                  similique nostrum atque illo, ducimus numquam tenetur
                  veritatis modi adipisci porro quam voluptas possimus? Earum,
                  numquam! Labore dolorum consectetur doloribus ullam atque,
                  vitae unde eaque cum sit! Ea in reprehenderit saepe beatae
                  temporibus ipsam perspiciatis possimus impedit commodi. Qui
                  voluptates, quam perspiciatis sequi quos quod accusamus ab
                  earum rerum, quibusdam odio incidunt tenetur cumque assumenda
                  consectetur eum ratione aspernatur eos dolorem! Ipsa,
                  voluptate cumque laudantium ipsam distinctio rerum eveniet
                  aperiam culpa magnam vel quos. Rem deleniti numquam iure
                  reiciendis voluptatibus nostrum incidunt odio ullam? Vel,
                  similique. Praesentium, ab vero. Sed, cum rerum similique
                  asperiores odit deleniti quod et magni soluta suscipit minus
                  repellat. Assumenda asperiores atque vitae totam eaque ex
                  iusto laborum accusantium iste nam. Ducimus debitis
                  necessitatibus illum, maiores alias rerum perspiciatis ipsum
                  sed et?
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BodyHeader;
