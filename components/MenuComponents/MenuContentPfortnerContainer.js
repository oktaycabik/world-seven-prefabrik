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
                      ● Fiyat avantajı ile Kapı Bekçisi konteynerları tam bir
                      bütçe dostudur.
                    </li>
                    <li className="mt-2">
                      ● Montaj ve tamir işlerinden zevk alanlar için güzel bir
                      eğlencedir.
                    </li>
                    <li className="mt-2">
                      ● Kapı Bekçisi konteynerler sayesinde mobil ve bağımsız
                      olabilirsiniz. Yani istediğiniz zaman sırt çantanızı alır
                      gibi konteynırınızı alarak istediğiniz yere taşıyabilir,
                      özgürlüğün tadını çıkarın.
                    </li>
                    <li className="mt-2">
                      ● Kapı Bekçisi konteyneri istediğiniz gibi tasarlayabilir,
                      kapı, pencere, wc, banyo kısımlarını arzu ettiğiniz yere
                      koyabilirsiniz.
                    </li>
                    <li className="mt-2">
                      ● Contain Haus Kapı Bekçisi konteynerlerinin en büyük
                      avantajlarından birisi de yüksek izolasyona sahip
                      olmasıdır.
                    </li>
                    <li className="mt-2">
                      ● Contain Haus Kapı Bekçisi konteynerlerinin en büyük
                      avantajlarından birisi de yüksek izolasyona sahip
                      olmasıdır.
                    </li>
                    <li className="mt-2">
                      ● Contain Haus Kapı Bekçisi konteynerleri 9.00 şiddetinde
                      depreme dayanıklı olacak şekilde tasarlanmıştır.
                    </li>
                    <li className="mt-2">
                      ● Paslanmaz çelikten yapılan Contain Haus Kapı Bekçisi
                      konteynerleri onlarca sene sağlamlığını korur.
                    </li>
                    <li className="mt-2">
                      ● Fibersement tabanı ile Kapı Bekçisi konteyner zeminleri
                      oldukça sağlamdır, betondan farksızdır.
                    </li>
                    <li className="mt-2">
                      ● Duvarları oluşturan 5 cm’lik sandviç paneller ile
                      izolasyon oldukça yüksek seviyededir.
                    </li>
                    <li className="mt-2">
                      ● Kapı Bekçisi konteynerlerin alt ve üst şase genişliği 15
                      cm’dir. Kapı Bekçisi konteynerler ısıya dayanıklı ve su
                      geçirmezdirler.
                    </li>
                    <li className="mt-2">
                      ● Kapı Bekçisi konteynerler nem geçirmezliği ve ses
                      geçirmezlik açısından iyi bir performansa sahiptir.
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
