import React from "react";

const MenuContentCafeContaineir = ({ data }) => {
  return (
    <>
      <header>
        <div>
          <div className="container ">
            <div className="row ">
              <div className="col-lg-12  ">
                <div className=" ml-0 mr-0 p-4  ">
                  <h1 className=" text-dark d-flex justify-content-center ">
                    {data.title.first}
                  </h1>
                  <p className="  fz-20 text-justify text-dark">
                    {data.content.first}
                  </p>
                  <p className="  fz-20 text-justify text-dark">
                    {data.content.second}
                  </p>
                  <p className="  fz-20 text-justify text-dark">
                    {data.content.third}
                  </p>
                  <p className="  fz-20 text-justify text-dark">
                    {data.content.forth}
                  </p>
                  <h2 className=" text-dark ">{data.title.second}</h2>
                  <p className="  fz-20 text-justify text-dark">
                    {data.content.fifth}
                  </p>
                  <h2 className=" text-dark d-flex  ">{data.title.third}</h2>
                  <div className="row">
                    {/* <div className="col-lg-8 col-md-12 col-sm-12 mt-3 mb-3">
                      <img src={data.content.image1} />
                    </div> */}
                    <div className="col-12">
                      <p className="  fz-20 text-justify text-dark">
                        {data.content.sixth}
                      </p>
                      <p className="  fz-20 text-justify text-dark">
                        {data.content.seventh}
                      </p>
                    </div>
                  </div>

                  <h2 className=" text-dark d-flex  ">{data.title.forth}</h2>
                  <div className="row">
                    {/* <div className="col-lg-8 col-md-12 col-sm-12 mt-3 mb-3">
                      <img src={data.content.image2} />
                    </div> */}
                    <div className="col-12">
                      <p className="  fz-20 text-justify text-dark">
                        {data.content.eidth}
                      </p>
                      <p className="  fz-20 text-justify text-dark">
                        {data.content.ninth}
                      </p>
                    </div>
                  </div>
                  <h2 className=" text-dark ">{data.title.fifth}</h2>
                  <ul className="mt-2 mb-2 fz-20 text-justify">
                    <li className="mt-2">
                      ??? Fiyat avantaj?? ile kafe konteynerlar?? tam bir b??t??e dostudur. 
                    </li>
                    <li className="mt-2">
                      ??? Kafe konteynerler sayesinde mobil ve ba????ms??z olabilirsiniz. Yani istedi??iniz zaman s??rt ??antan??z?? al??r gibi konteyn??r??n??z?? alarak istedi??iniz yere ta????yabilir, ??zg??rl??????n tad??n?? ????karabilirsiniz. 
                    </li>
                    <li className="mt-2">
                      ??? Kafe konteyneri istedi??iniz gibi tasarlayabilir, kap??, pencere, wc, banyo k??s??mlar??n?? arzu etti??iniz yere koyabilirsiniz. 
                    </li>
                    <li className="mt-2">
                      ??? ???	Contain Haus kafe konteynerlerinin en b??y??k avantajlar??ndan birisi de y??ksek izolasyona ve malzeme kalitesine sahip olmas??d??r. 
                    </li>
                    <li className="mt-2">
                      ??? ???	Paslanmaz ??elikten yap??lan Contain Haus kafe konteynerleri onlarca sene sa??laml??????n?? korur. 
                    </li>
                    <li className="mt-2">
                      ??? Mit seiner Faserzementbasis sind Containerb??den f??r
                      Caf??s ziemlich langlebig und von Beton nicht zu
                      unterscheiden.
                    </li>
                    <li className="mt-2">
                      ??? Fibersement taban?? ile kafe konteyner zeminleri olduk??a sa??lamd??r, betondan farks??zd??r.
                    </li>
                    <li className="mt-2">
                      ??? 	Kafe konteynerler ??s??ya dayan??kl?? ve su ge??irmezdirler. 
	Duvarlar?? olu??turan 5 cm???lik sandvi?? paneller ile izolasyon olduk??a y??ksek seviyededir. 

                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default MenuContentCafeContaineir;
