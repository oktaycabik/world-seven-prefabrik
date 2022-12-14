import React from "react";

const MenuContentPfortnerContainer = ({ data }) => {
  return (
    <>
      <header>
        <div>
          <div className="container ">
            <div className="row">
              <div className="col-lg-12  ">
                <div className="caption ml-0 mr-0 p-4  ">
                  <h1 className=" text-dark d-flex justify-content-center ">
                    {data.title.first}
                  </h1>
                  <p className=" mt-5  fz-20 text-justify text-dark">
                    {data.content.first}
                  </p>
                  <p className="   fz-20 text-justify text-dark">
                    {data.content.second}
                  </p>
                  <p className="   fz-20 text-justify text-dark">
                    {data.content.third}
                  </p>
                  <p className="   fz-20 text-justify text-dark">
                    {data.content.forth}
                  </p>
                  <h2 className="text-dark mt-3 mb-3  ">{data.title.second}</h2>
                  <div className="row justify-content-center">
                    {/* <div className="col-lg-8 col-md-12 col-sm-12 t-3 mb-3">
                        <img src={data.content.image1} />
                      </div> */}
                    <div className="col-12">
                      <p className="   fz-20 text-justify text-dark">
                        {data.content.fifth}
                      </p>
                    </div>
                  </div>
                  <h2 className="text-dark mt-3 mb-3   ">{data.title.third}</h2>
                  <p className="   fz-20 text-justify text-dark">
                    {data.content.sixth}
                  </p>
                  <p className="   fz-20 text-justify text-dark">
                    {data.content.seventh}
                  </p>
                  <h2 className="text-dark mt-3 mb-3   ">{data.title.forth}</h2>
                  <div className="row justify-content-center">
                    {/* <div className="col-lg-8 col-md-12 col-sm-12 t-3 mb-3">
                        <img src={data.content.image2} />
                      </div> */}
                    <div className="col-12">
                      <p className="   fz-20 text-justify text-dark">
                        {data.content.eidth}
                      </p>
                      <p className="   fz-20 text-justify text-dark">
                        {data.content.ninth}
                      </p>
                    </div>
                  </div>
                  <h2 className=" text-dark  ">{data.title.fifth}</h2>
                  <p className="   fz-20 text-justify text-dark">
                    {data.content.tenth}
                  </p>

                  <h2 className=" text-dark ">{data.title.sixth}</h2>
                  <div className="row justify-content-center">
                    {/* <div className="col-lg-8 col-md-12 col-sm-12 t-3 mb-3">
                        <img src={data.content.image3} />
                      </div> */}
                    <div className="col-12">
                      <p className="   fz-20 text-justify text-dark">
                        {data.content.eleventh}
                      </p>
                    </div>
                  </div>
                  <h2 className=" text-dark ">{data.title.seventh}</h2>
                  <ul className="mt-2 mb-2 fz-20 text-justify">
                    <li className="mt-2">
                      ??? Fiyat avantaj?? ile Kap?? Bek??isi konteynerlar?? tam bir
                      b??t??e dostudur.
                    </li>
                    <li className="mt-2">
                      ??? Montaj ve tamir i??lerinden zevk alanlar i??in g??zel bir
                      e??lencedir.
                    </li>
                    <li className="mt-2">
                      ??? Kap?? Bek??isi konteynerler sayesinde mobil ve ba????ms??z
                      olabilirsiniz. Yani istedi??iniz zaman s??rt ??antan??z?? al??r
                      gibi konteyn??r??n??z?? alarak istedi??iniz yere ta????yabilir,
                      ??zg??rl??????n tad??n?? ????kar??n.
                    </li>
                    <li className="mt-2">
                      ??? Kap?? Bek??isi konteyneri istedi??iniz gibi tasarlayabilir,
                      kap??, pencere, wc, banyo k??s??mlar??n?? arzu etti??iniz yere
                      koyabilirsiniz.
                    </li>
                    <li className="mt-2">
                      ??? Contain Haus Kap?? Bek??isi konteynerlerinin en b??y??k
                      avantajlar??ndan birisi de y??ksek izolasyona sahip
                      olmas??d??r.
                    </li>
                    <li className="mt-2">
                      ??? Contain Haus Kap?? Bek??isi konteynerlerinin en b??y??k
                      avantajlar??ndan birisi de y??ksek izolasyona sahip
                      olmas??d??r.
                    </li>
                    <li className="mt-2">
                      ??? Contain Haus Kap?? Bek??isi konteynerleri 9.00 ??iddetinde
                      depreme dayan??kl?? olacak ??ekilde tasarlanm????t??r.
                    </li>
                    <li className="mt-2">
                      ??? Paslanmaz ??elikten yap??lan Contain Haus Kap?? Bek??isi
                      konteynerleri onlarca sene sa??laml??????n?? korur.
                    </li>
                    <li className="mt-2">
                      ??? Fibersement taban?? ile Kap?? Bek??isi konteyner zeminleri
                      olduk??a sa??lamd??r, betondan farks??zd??r.
                    </li>
                    <li className="mt-2">
                      ??? Duvarlar?? olu??turan 5 cm???lik sandvi?? paneller ile
                      izolasyon olduk??a y??ksek seviyededir.
                    </li>
                    <li className="mt-2">
                      ??? Kap?? Bek??isi konteynerlerin alt ve ??st ??ase geni??li??i 15
                      cm???dir. Kap?? Bek??isi konteynerler ??s??ya dayan??kl?? ve su
                      ge??irmezdirler.
                    </li>
                    <li className="mt-2">
                      ??? Kap?? Bek??isi konteynerler nem ge??irmezli??i ve ses
                      ge??irmezlik a????s??ndan iyi bir performansa sahiptir.
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

export default MenuContentPfortnerContainer;
