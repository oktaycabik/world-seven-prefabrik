import React from "react";

const MenuContentFlatPackContainer = ({ data }) => {
  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 ColorSelectorDiv ">
              <div className="caption ml-0 mr-0 p-4 ColorSelectorDivCaption ">
                <h1 className="text-dark d-flex justify-content-center ">
                  {data.title.first}
                </h1>

                <div className="row justify-content-center">
                  {/* <div className="col-lg-8 col-md-12 col-sm-12 mt-4 mb-4">
                        <img
                          className="rounded content-image"
                          src={data.content.image1}
                        ></img>
                      </div> */}
                  <div className="col-12">
                    <p className="   fz-20 text-justify  text-dark">
                      {data.content.first}
                    </p>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.second}
                    </p>
                    <p className=" fz-20 text-justify text-dark">
                      {data.content.third}
                    </p>
                  </div>
                </div>

                <h2 className="text-dark d-flex ">{data.title.second}</h2>

                <div className="row justify-content-center">
                  {/* <div className="col-lg-8 col-md-12 col-sm-12 mt-4 mb-4">
                        <img
                          className="rounded content-image"
                          src={data.content.image2}
                        ></img>
                      </div> */}
                  <div className="col-12">
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.forth}
                    </p>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.fifth}
                    </p>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.sixth}
                    </p>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.seventh}
                    </p>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.eidth}
                    </p>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.ninth}
                    </p>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.tenth}
                    </p>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.eleventh}
                    </p>
                  </div>
                </div>

                <h2 className="text-dark d-block justify-content-center ">
                  {data.title.third}
                </h2>

                <div className="row justify-content-center">
                  {/* <div className="col-lg-8 col-md-12 col-sm-12 mt-4 mb-4">
                        <img
                          className="rounded content-image"
                          src={data.content.image3}
                        ></img>
                      </div> */}
                  <div className="col-12">
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.twelvth}
                    </p>
                    <p className="   fz-20 text-justify mb-10 fz-20 text-justify text-dark">
                      {data.content.thirteen}
                    </p>
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.forteen}
                    </p>
                  </div>
                </div>

                <h2 className="text-dark d-flex">{data.title.forth}</h2>

                <div className="row justify-content-center">
                  {/* <div className="col-lg-8 col-md-12 col-sm-12 mt-4 mb-4">
                        <img
                          className="rounded content-image"
                          src={data.content.image4}
                        ></img>
                      </div> */}
                  <div className="col-12">
                    <p className="   fz-20 text-justify text-dark">
                      {data.content.fifteen}
                    </p>
                  </div>
                </div>

                <h2 className="text-dark d-flex">{data.title.fifth}</h2>

                <ul className="mt-2 mb-2 fz-20 text-justify">
                  <li className="mt-2">
                    ??? Fiyat avantaj?? ile Flatpack konteynerlar tam bir b??t??e dostudur. 
                  </li>
                  <li className="mt-2">
                    {" "}
                    ??? Ya??am konteyner kiralamak yerine  kendi konteynerinizi flatpack olarak almak daha avantajl?? olacak.
                  </li>
                  <li className="mt-2">
                    {" "}
                    ??? Ya??am konteyneri kiralama fiyat listesi ile konteyner sat??n alma fiyatlar??n?? kar????la??t??rma f??rsat??n??z olacakt??r.
                  </li>
                  <li className="mt-2">
                    {" "}
                    ??? Ya??am konteyneri maliyetleri Flatpack ile daha uygun olur. 
                  </li>
                  <li className="mt-2">
                    {" "}
                    ??? Daha uygun Ya??am konteyneri fiyatlar?? ile kar????la????rs??n??z. 
                  </li>
                  <li className="mt-2">
                    {" "}
                    ??? Montaj ve tamir i??lerinden zevk alanlar i??in g??zel bir e??lencedir.
                  </li>
                  <li className="mt-2">
                    {" "}
                    ??? 4 saatte kurulumu tamamlan??r.
                  </li>
                  <li className="mt-2">
                    {" "}
                    ??? Mod??ler ev maliyetleri flatpack ile daha da d????er. 
                  </li>
                  <li className="mt-2">
                    {" "}
                    ???	Mod??ler ev anahtar teslim fiyatlar?? caziptir. 
                  </li>
                  <li className="mt-2">
                    {" "}
                    ???	En uygun fiyata modern konteyner ev sahibi olabilirsiniz. 
                  </li>
                  <li className="mt-2">
                    {" "}
                    ??? Konteyner ev i?? tasar??m??n?? diledi??iniz gibi yapabilirsiniz. 
                  </li>
                  <li className="mt-2">
                    {" "}
                    ??? Konteyner ev fikirleri i??in m??hendislerimiz ve sat???? dan????manlar??m??z size bir??ok se??enek sunar. 
                  </li>
                  <li className="mt-2">
                    {" "}
                    ??? Konteyner ev in??a etmek i??in flatpack uygun bir se??enektir. Bu sayede konteyner ev maliyetleri d????er. 
                  </li>
                  <li className="mt-2">
                    {" "}
                    ???	Mod??ler sistemi sayesinde her par??a rahatl??kla yuvas??na oturtulur. 
                  </li>
                  <li className="mt-2">
                    {" "}
                    ??? ??izimlerinin rahatl??kla anla????labilece??i kurulum kitap???????? ve ad??m ad??m kurulumu anlatan video ile kendi konteyn??r??n??z?? kendiniz rahatl??kla monte edebilirsiniz. 
                  </li>
                  <li className="mt-2">
                    {" "}
                    ??? Flatpack konteyn??rlar?? ??oklu olarak (Bir t??ra 10 flatpack konteyner s????maktad??r) bir yerden ba??ka bir yere ta????yabilirsiniz. Bu sayede kargo masraf??n??z?? da en aza indirmi?? olursunuz.
                  </li>
                  <li className="mt-2">
                    {" "}
                    ??? Flatpack konteyn??rlar sayesinde mobil ve ba????ms??z olabilirsiniz. Yani istedi??iniz zaman s??rt ??antan??z?? al??r gibi konteyn??r??n??z?? alarak istedi??iniz yere ta????yabilir, ??zg??rl??????n tad??n?? ????kar??n. 
                  </li>
                  <li className="mt-2">
                    {" "}
                    ??? Flatpack konteyn??r??n??z?? istedi??iniz gibi tasarlayabilir, kap??, pencere, wc, banyo k??s??mlar??n?? arzu etti??iniz yere koyabilirsiniz. 
                  </li>
                  <li className="mt-2">
                    {" "}
                    ??? Contain Haus flatpack konteyn??rlar??n??n en b??y??k avantajlar??ndan birisi de y??ksek izolasyona sahip olmas??d??r. 
                  </li>
                  <li className="mt-2">
                    {" "}
                    ??? Contain Haus flatpack konteyn??rlar?? 9.00 ??iddetinde depreme dayan??kl?? olacak ??ekilde tasarlanm????t??r. 
                  </li>
                </ul>

               
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default MenuContentFlatPackContainer;
