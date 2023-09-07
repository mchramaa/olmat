"use client";

import React from "react";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import WaveBackground from "../component/wave";

export default function Home() {
  return (
    <main className="bg-white">
      <MouseParallaxContainer
        className="parallax"
        containerStyle={{
          width: "100%",
        }}
        globalFactorX={0.2}
        globalFactorY={0.2}
        resetOnLeave
      >
        <MouseParallaxChild
          factorX={0.9}
          factorY={0.1}
          style={{
            background: "url(/assets/paralax/awanPink.png)",
            backgroundPositionY: "50%",
            transform: "scale(1.2)",
            position: "absolute",
            filter: "blur(4px) brightness(100%)",
            opacity: "60%",
            backgroundSize: "auto",
            backgroundRepeat: "repeat",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
          }}
        />
        <div className="fixed top-0 z-40">
          <Nav />
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quo
          tenetur velit delectus. Nulla illum facere veniam nam, consectetur
          error exercitationem rerum repellendus eos voluptatum quia, nihil
          soluta natus nobis sit. Accusamus earum aperiam ut eligendi doloremque
          dolorum quidem cupiditate laboriosam totam, natus itaque nihil
          adipisci perspiciatis ipsam, expedita repudiandae! Totam beatae soluta
          minima minus, at culpa odio officia esse rerum possimus eos officiis
          deleniti, fugiat nam. Itaque, magnam reprehenderit! Quod beatae nihil
          sunt ab. Perferendis, voluptatum magnam, unde optio non quod sunt
          quidem dolorem labore quis itaque quas cumque, amet totam ipsum
          eveniet quaerat culpa soluta autem? Cum accusamus minima non placeat
          laudantium, sit ab. Perspiciatis perferendis quo beatae amet sint ut
          id ea dolore pariatur? Architecto, eveniet! Error iusto architecto
          labore animi dolorum unde voluptate accusantium mollitia nihil ipsa
          aliquam in id vel, nesciunt sunt minima quis placeat ut magnam.
          Nostrum ipsum labore illo assumenda molestias quaerat enim aliquid
          optio nulla! Debitis magni enim modi, atque nemo velit autem omnis
          voluptate provident obcaecati harum molestiae aspernatur repellat.
          Quia, consectetur libero, accusantium eius necessitatibus tenetur
          deleniti modi quasi eos debitis pariatur, saepe quos labore asperiores
          suscipit. Amet cumque illo repudiandae maxime? Repellendus cupiditate
          eum pariatur incidunt sapiente vel eos laborum, aliquam natus iusto
          adipisci minima expedita maxime, commodi eveniet ipsam molestias aut
          sit deserunt voluptas dolorum! Temporibus eaque officiis doloremque
          quos impedit dolore accusantium deserunt ipsam quasi rem dolorem,
          sapiente non dicta, architecto ad voluptates? Dolorem corrupti vitae
          dolores, enim, provident aperiam illo explicabo minus molestias ea ab
          tenetur unde, voluptatum laudantium sit tempore voluptates blanditiis
          sed. Deleniti corporis maxime ex dolor amet doloribus id,
          reprehenderit ut, error aspernatur facilis modi eligendi assumenda!
          Veritatis molestias eos labore placeat porro dicta voluptatem, illum
          nihil ipsum quasi obcaecati reiciendis quaerat modi excepturi beatae
          eius quidem quia officiis odio sit totam molestiae deserunt. Dicta, at
          distinctio! Voluptate laborum, quas magnam consectetur officia veniam
          vitae soluta praesentium provident. Placeat officia excepturi, atque
          officiis accusantium ea dignissimos reiciendis doloribus vero illo eos
          at magnam, nemo id similique omnis, aspernatur inventore. Quasi
          adipisci nemo molestias pariatur, possimus odio accusamus reiciendis
          quos commodi, ex facere tempora modi, voluptates saepe? Unde deserunt
          eos reiciendis quas aut ad asperiores doloribus voluptatibus
          perferendis. Laborum aspernatur eum vel quibusdam a consequatur
          inventore repellendus architecto, earum repudiandae reiciendis
          obcaecati nobis? In quae fugiat nemo? Asperiores nam quibusdam error
          ratione ab ipsum architecto officiis totam adipisci delectus quam
          ipsam dolorem perspiciatis itaque cupiditate, quasi consequuntur
          laborum accusantium enim accusamus voluptate exercitationem? Minima
          sint temporibus porro cum, eaque suscipit! At fuga nesciunt recusandae
          mollitia quibusdam voluptas velit sint, quasi consequatur, tenetur,
          voluptatem earum quo aut eius exercitationem unde eum ut provident
          eveniet? Quia harum, iure facilis explicabo ipsa laudantium libero,
          placeat optio repudiandae aliquid perspiciatis commodi at repellendus
          corrupti soluta suscipit. Quisquam, mollitia sequi. Facere, deleniti.
          Blanditiis praesentium sunt recusandae reiciendis eligendi sapiente
          pariatur repellat laudantium modi, deleniti natus beatae atque
          debitis! Ratione hic laborum quas suscipit esse velit reprehenderit
          ducimus expedita saepe, similique rerum necessitatibus alias dolor
          vitae illum deleniti libero exercitationem. Non repellat quis, aperiam
          necessitatibus debitis nobis asperiores natus dolore exercitationem
          sequi, accusamus ipsam totam rem nihil! Iusto voluptate, accusamus
          molestias saepe alias pariatur assumenda nobis similique perspiciatis
          adipisci incidunt, fugiat atque eligendi quia eum iure provident quas
          ratione distinctio tempora. Eum animi, dolore autem ipsum ipsam
          perferendis! Amet voluptatibus facere est ad, eos iure error
          laudantium dolorem quisquam rem alias blanditiis esse quibusdam
          cupiditate rerum deleniti eveniet quod iusto illo a natus corrupti
          facilis! Quia adipisci repellendus maiores libero, incidunt ipsum
          velit perspiciatis dolor ipsam exercitationem veritatis ad aliquam
          perferendis a ullam vero est nisi consequuntur cumque sapiente labore
          repudiandae quis veniam explicabo! Voluptate ea laudantium tempora vel
          facilis nisi adipisci, minima vero repellendus aspernatur, ipsam
          nesciunt magnam? At sequi molestias quasi aspernatur reprehenderit
          obcaecati culpa deleniti minus aut aliquid quam eum vitae eius porro
          ipsa illo cupiditate beatae saepe, quas blanditiis, nesciunt cum.
          Aspernatur atque in quas repellat saepe modi accusantium magni, ex
          debitis quia doloremque dolore sequi, praesentium commodi temporibus
          sint a asperiores adipisci itaque incidunt veniam nesciunt. Quos,
          suscipit illo rerum vel omnis at sapiente illum ea perferendis ullam
          ratione cum veniam ipsa amet, voluptate dolores facere optio nisi
          dolor saepe dignissimos mollitia esse voluptatum. Eos cupiditate earum
          debitis atque quam fugiat deserunt inventore cumque corrupti ipsa
          dicta placeat repudiandae recusandae quasi aliquam et eaque reiciendis
          exercitationem similique, sit hic ullam error rerum. Reiciendis vel
          maxime, molestiae, itaque libero amet minus, delectus sequi tempore a
          aliquam ipsum adipisci? Itaque consequatur cum nostrum voluptatum
          dolor quae hic minus quas reprehenderit ipsa similique maxime iusto,
          dignissimos et officia libero officiis incidunt ducimus blanditiis
          unde earum veniam! Iure quaerat, modi eveniet amet id porro laborum
          laudantium illo, repellendus quam vero nostrum fugit! Maxime veritatis
          ea, tempora deleniti vel nihil dolor rem voluptate quos eum
          distinctio, officiis voluptatem velit ab molestiae corrupti impedit
          quo accusantium, sed ad inventore? Tempora expedita nam sit quae
          molestias corporis delectus soluta eos culpa magni maiores quo ad
          consequatur laboriosam, nihil, vitae, labore accusantium blanditiis
          aliquam ducimus hic? Atque eius pariatur incidunt cumque, ratione,
          itaque eligendi odio odit consectetur deleniti commodi fuga nulla
          placeat quo nisi sint numquam quos dicta, in ullam autem natus quis
          aspernatur explicabo! Quae facere minus suscipit animi odit deleniti,
          laboriosam, maiores sequi, accusamus eligendi voluptatibus
          exercitationem blanditiis ratione distinctio laudantium molestias
          laborum repudiandae sapiente cum beatae molestiae. Dignissimos minima
          quo nobis, quia totam iure temporibus possimus corrupti esse ex
          excepturi deserunt sit amet blanditiis fuga pariatur magnam. Commodi
          exercitationem aliquid maxime quia ab laboriosam sit necessitatibus
          adipisci soluta velit fugit aspernatur, eaque tenetur, doloremque
          impedit ad dicta nihil accusantium veniam, nam natus atque provident?
          Necessitatibus rerum, placeat error architecto eos corrupti asperiores
          dolorum dolor, est minima distinctio quasi perspiciatis iure, debitis
          harum corporis! Sunt veritatis ratione suscipit quae, deleniti
          voluptas excepturi commodi sit architecto expedita cupiditate, magni a
          accusantium iure aliquid saepe minus id voluptatum in. Ipsa facilis
          nemo aperiam explicabo accusantium ipsum, deserunt totam aut ab! Sit
          quas corporis ut, ipsa asperiores doloremque ipsum, aperiam hic labore
          quo mollitia, officiis id. Dolorem ut porro ad impedit sequi animi
          nemo blanditiis esse, praesentium deserunt odio delectus natus
          repellat? Laboriosam, facere. Beatae quia laboriosam quibusdam
          accusantium, natus asperiores! Consequuntur obcaecati, vitae cum earum
          suscipit soluta consectetur pariatur culpa iste atque commodi aperiam
          ea nesciunt. Obcaecati est in, quis quam blanditiis accusamus
          molestias aliquid corporis nemo nulla unde ea ipsa reprehenderit
          itaque at officiis sint quo asperiores molestiae cumque rem sed
          nostrum. Et amet quibusdam nesciunt omnis laboriosam quod molestias
          ipsum cumque possimus soluta dicta atque temporibus ad accusamus rem
          iusto, animi sint corrupti veniam iste odio exercitationem sequi nemo.
          Ad, totam?
        </div>
      </MouseParallaxContainer>
      <div className="">
        <WaveBackground />
        <Footer />
      </div>
    </main>
  );
}
