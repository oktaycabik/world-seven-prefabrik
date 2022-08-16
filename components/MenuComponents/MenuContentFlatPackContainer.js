import React from "react";

const MenuContentFlatPackContainer = ({ data }) => {
  return (
    <>
      <header>
        <div className="container">
          <div className="row mt-10">
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
                    • Fiyat avantajı ile Flatpack konteynerlar tam bir bütçe dostudur. 
                  </li>
                  <li className="mt-2">
                    {" "}
                    • Yaşam konteyner kiralamak yerine  kendi konteynerinizi flatpack olarak almak daha avantajlı olacak.
                  </li>
                  <li className="mt-2">
                    {" "}
                    • Yaşam konteyneri kiralama fiyat listesi ile konteyner satın alma fiyatlarını karşılaştırma fırsatınız olacaktır.
                  </li>
                  <li className="mt-2">
                    {" "}
                    • Yaşam konteyneri maliyetleri Flatpack ile daha uygun olur. 
                  </li>
                  <li className="mt-2">
                    {" "}
                    • Daha uygun Yaşam konteyneri fiyatları ile karşılaşırsınız. 
                  </li>
                  <li className="mt-2">
                    {" "}
                    • Montaj ve tamir işlerinden zevk alanlar için güzel bir eğlencedir.
                  </li>
                  <li className="mt-2">
                    {" "}
                    • 4 saatte kurulumu tamamlanır.
                  </li>
                  <li className="mt-2">
                    {" "}
                    • Modüler ev maliyetleri flatpack ile daha da düşer. 
                  </li>
                  <li className="mt-2">
                    {" "}
                    •	Modüler ev anahtar teslim fiyatları caziptir. 
                  </li>
                  <li className="mt-2">
                    {" "}
                    •	En uygun fiyata modern konteyner ev sahibi olabilirsiniz. 
                  </li>
                  <li className="mt-2">
                    {" "}
                    • Konteyner ev iç tasarımını dilediğiniz gibi yapabilirsiniz. 
                  </li>
                  <li className="mt-2">
                    {" "}
                    • Konteyner ev fikirleri için mühendislerimiz ve satış danışmanlarımız size birçok seçenek sunar. 
                  </li>
                  <li className="mt-2">
                    {" "}
                    • Konteyner ev inşa etmek için flatpack uygun bir seçenektir. Bu sayede konteyner ev maliyetleri düşer. 
                  </li>
                  <li className="mt-2">
                    {" "}
                    •	Modüler sistemi sayesinde her parça rahatlıkla yuvasına oturtulur. 
                  </li>
                  <li className="mt-2">
                    {" "}
                    • Çizimlerinin rahatlıkla anlaşılabileceği kurulum kitapçığı ve adım adım kurulumu anlatan video ile kendi konteynırınızı kendiniz rahatlıkla monte edebilirsiniz. 
                  </li>
                  <li className="mt-2">
                    {" "}
                    • Flatpack konteynırları çoklu olarak (Bir tıra 10 flatpack konteyner sığmaktadır) bir yerden başka bir yere taşıyabilirsiniz. Bu sayede kargo masrafınızı da en aza indirmiş olursunuz.
                  </li>
                  <li className="mt-2">
                    {" "}
                    • Flatpack konteynırlar sayesinde mobil ve bağımsız olabilirsiniz. Yani istediğiniz zaman sırt çantanızı alır gibi konteynırınızı alarak istediğiniz yere taşıyabilir, özgürlüğün tadını çıkarın. 
                  </li>
                  <li className="mt-2">
                    {" "}
                    • Flatpack konteynırınızı istediğiniz gibi tasarlayabilir, kapı, pencere, wc, banyo kısımlarını arzu ettiğiniz yere koyabilirsiniz. 
                  </li>
                  <li className="mt-2">
                    {" "}
                    • Contain Haus flatpack konteynırlarının en büyük avantajlarından birisi de yüksek izolasyona sahip olmasıdır. 
                  </li>
                  <li className="mt-2">
                    {" "}
                    • Contain Haus flatpack konteynırları 9.00 şiddetinde depreme dayanıklı olacak şekilde tasarlanmıştır. 
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
