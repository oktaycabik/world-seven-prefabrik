import React from "react";
import Link from "next/link";
import Head from "next/head";
const Überuns = () => {
  return (
    <>
      <Head>
        <title>World Seven Prefabrik | Hakkımızda </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="bg-about">
        <div className="container ">
          <div className="row mt-10 mb-90 pb-30">
            <div className="col-lg-9 ">
              <div className="ms-5 p-4 card mt-5">
                <h4 className="mt-2">Hakkımızda</h4>
                <h5 className="mt-4">
                  PREFABRİK YAPILARDA ALMANYA VE TÜRKİYE’NİN ÖNCÜ MARKASI WORLD
                  SEVEN PREFABRİK
                </h5>
                <p className="fz-15">
                  World Seven Prefabrik, konteyner sektörünün önde gelen
                  şirketlerinden biridir. Almanya ve Türkiye'de üretim yapan
                  firmamız aynı zamanda alanında ileri teknoloji kullanan lider
                  bir Ar-Ge firmasıdır. Konteyner ve yapı sistemleri alanındaki
                  en büyük atılımlardan biri olarak, Almanya'da ve tüm Avrupa'da
                  standartları yeniden tanımlıyoruz.
                </p>
                <img src="/assets/img/FrontPage/SpecialMainpageUpdate.webp" />
                <div className="d-flex mt-2 justify-content-between">
                  <div className="col-4 gx-1">
                    {" "}
                    <img
                      className="w-100 "
                      height="200px"
                      src="/assets/img/InnerPage/BurocontainerInnerPageUpdate.jpg"
                    />{" "}
                  </div>
                  <div className="col-4 gx-1">
                    {" "}
                    <img
                      className="w-100"
                      height="200px"
                      src="/assets/img/InnerPage/XLInnerPageUpdate.webp"
                    />
                  </div>
                  <div className="col-4 gx-1">
                    {" "}
                    <img
                      className="w-100"
                      height="200px"
                      src="/assets/img/FrontPage/SanitaMainpageUpdate.webp"
                    />
                  </div>
                </div>
                <p className="mt-3 fz-15">
                World Seven Prefabrik olarak tamamen müşterilerimizin ihtiyaçlarına
                  uygun, özel planlar oluşturarak isteklere uygun çözümler
                  sunuyoruz. Bunlar ofis konteynerleri, konut konteynerleri veya
                  inşaat konteynerleri olarak idealdir. Konteynerler ve
                  prefabrik yapılar giderek daha önemli hale geliyor, bu da
                  modüler inşaat yöntemlerinin hem konut hem de ticari alanlarda
                  giderek ilk tercih haline geldiği anlamına geliyor. World Seven Prefabrik
                   olarak talebe uyduk ve yaşam konteynerlerimizi ticari
                  sektörde de kullanılabilecek şekilde tasarladık. Özellikle
                  yeni neslin üretiminde firmamızın geliştirdiği yüksek
                  standartlar Alman standardına uygundur. Alman standartlarına
                  göre üretilen ofis konteynerleri size modern bir ofis
                  kazandırıyor. Hastane, AVM veya kurumsal binalar gibi büyük
                  ölçekli projelerde ihtiyacınıza göre tek katlı veya çok katlı
                  konteyner modelleri üretebiliyoruz. Daha fazla bilgi için
                  bizimle iletişime geçebilirsiniz.
                </p>
                <h6 className="fw-600">World Seven Prefabrik Üretimleri:</h6>
                <ul className="about-list mt-2">
                  <li>
                    Ofis Konteynerleri, Yaşam Konteynerleri, Kafe Konteynerleri,
                    Güvenlik Kabinleri, Duş Kabinleri, Tuvalet Kabinleri{" "}
                  </li>
                  <li>Tiny House, Çelik Evler, Bungalov Evler</li>
                
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Überuns;
