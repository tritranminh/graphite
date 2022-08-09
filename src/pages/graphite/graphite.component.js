import ImagePreview from '../../components/image-preview/image-preview.component';
import imageGraphite from './../../assets/img/1533790743.jpg';
import graphiteDiamond from './../../assets/img/diamond-graphite.png';

import './graphite.styles.scss';

const Graphite = () => {
  return (
    <div className='graphite-main'>
      <ImagePreview content='Graphite' imagePack={imageGraphite} />

      <div className='graphite-content container'>
        <div className='whatisgraphite'>
          <div className='header-graphite'>
            What is graphite ? - The New Strategic Mineral
          </div>
          <div className='content-graphite'>
            <p>
              Graphite is one of only two naturally occurring forms of pure
              carbon, the other being diamonds. Graphite occurs in a two
              dimensional, planar molecular structure whereas diamonds have a
              three dimensional crystal structure. Graphite generally occurs as
              flakes, which are multiple layers of graphene held together by
              weak bonds. Graphene is a single, one atom thick layer of carbon
              atoms arranged in a “honeycomb” or “chicken wire” pattern. It has
              been estimated that there are three million layers of graphene in
              a one millimeter thickness of graphite. The delamination or
              exfoliation of graphite flakes is therefore one method of making
              graphene.
            </p>

            <img
              style={{ width: '100%', height: 'auto' }}
              src={graphiteDiamond}
              alt='graphite and diamond'
            />

            <p>
              Graphite is formed naturally through the metamorphism of carbon
              rich materials in rock which leads to the formation of either
              crystalline flake graphite, fine grained amorphous graphite, or
              crystalline vein or lump graphite. Graphite is a non-metal but has
              many properties of metals. It is an excellent conductor of heat
              and electricity and has the highest natural strength and stiffness
              of any material. It maintains its strength and stability to
              temperatures in excess of 3,600°C and is very resistant to
              chemical attack. At the same time it is one of the lightest of all
              reinforcing agents and has high natural lubricity.
            </p>
          </div>
        </div>

        <div className='graphiteuseforwhat'>
          <div className='header-graphite'>Graphite used for what ?</div>
          <div className='content-graphite'>
            <p>
              Traditional demand for graphite is largely tied to the steel
              industry where it is used as a component in bricks which line
              blast furnaces (“refractories”), as a liner for ladles and
              crucibles, and as an agent to increase the carbon content of
              steel. In the automotive industry it is used in brake linings,
              gaskets and clutch materials. Graphite also has a myriad of other
              industrial uses in lubricants, carbon brushes for electric motors,
              fire retardants, and insulation and reinforcements products.
              Graphite is a very important part of everyday life but is rarely
              seen or heard of. As such it has been a somewhat boring industrial
              mineral whose price rises and falls according to the economic
              cycle and production levels in China, the dominant producer. This
              all began to change around 2005 as demand for flake graphite was
              growing at approximately five per cent per year due to the growth
              of China and other emerging economies and the resultant increase
              in demand from the steel industry. Prices rose from about US$700/t
              for large flake graphite to almost US$3,000/t in 2012. Shortages
              were reported and highlighted world dependence on China which
              accounts for 70-80% of world production. Since then flake demand
              and prices have declined due to the slowdown in China and a lack
              of growth elsewhere in the world. Five or six years ago, demand
              for graphite from the lithium ion battery ("LiB") industry was
              quite small. However, it has been growing at over 20% per year due
              to the proliferation of cell phones, cameras, lap tops, power
              tools and other hand held devices. Graphite is the anode material
              in the battery and there are no substitutes. More recently, the
              growth in hybrid and all electric vehicles and grid storage have
              contributed to continued strong demand growth. LiB demand already
              consumes 25% of graphite production and these two huge markets are
              still in their infancy. It has been estimated that an additional
              300gWh of LiB manufacturing capacity is currently under
              construction and will be operational within three years. This will
              require annual flake graphite production to double. Graphite is
              also a critical component of fuel cells, flow batteries and
              consumer electronics. Because of supply concerns relating to China
              producing over 70% of the world’s graphite, and 100% of the
              battery material, the European Union included graphite as one of
              14 “critical mineral raw materials” considered to be in supply
              risk. The United States government has also included graphite on a
              list of mineral resources whose loss could critically impact the
              public health, economic security and/or national and homeland
              security of the United States. As the result of strongly growing
              demand from clean and green tech applications, and the supply risk
              related to Chinese production, graphite has become the new
              strategic mineral.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graphite;
