import { ProcessList1 } from "@/components/reuseable/process-list";
import { processList1 } from "@/data/process";
import { doPobrania } from "@/data/process";
import Link from "next/link";


export default function Process7() {
  return (
    <>
      <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
        <div className="row mb-5">
          <div className="col-md-10 col-xl-8 col-xxl-7 mx-auto text-center">

            <h2 className="display-4 mb-4 px-lg-14">Kto może wziąć udział w projekcie?</h2>
          </div>
        </div>

        <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
          <div className="col-lg-6 order-lg-2">
            {processList1.map((item) => (
              <ProcessList1 {...item} key={item.no} />
            ))}
          </div>

          <div className="col-lg-6">
            <h2 className="display-6 mb-3">Jak to działa?</h2>
            <p className="lead fs-lg pe-lg-5">
              Find out everything you need to know and more about how we create our business process models.
            </p>

            <p>
              Rekrutacja realizowana będzie z uwzględnieniem zasady równych szans i płci oraz
              niedyskryminacji, w tym dostępności dla osób z niepełnosprawnościami. Przy rekrutacji
              stosowane będą także zasady zrównoważonego rozwoju.
            </p>

            <p>
              Do wzięcia udziału w projekcie zapraszamy wszystkich chętnych spełniających wyżej
              wymienione kryteria, a w szczególności bierne zawodowo kobiety w wieku 18 – 29 lat,
              które posiadają wykształcenie ponadgimnazjalne lub niższe.
            </p>

            <p>
              Istnieje możliwość skorzystania z tłumacza języka migowego, pętli indukcyjnej lub pomocy
              asystenta osoby z niepełnosprawnością.
            </p>
            <p className="mb-6">
              Ponadto dla kobiet, które mają problem z dojazdem do Biura projektu (gdyż posiadają pod
              opieką dziecko/dzieci/osoby wymagające wsparcia; kobiety z niepełnosprawnościami)
              możliwy jest dojazd do Kandydatki do domu i pomoc kadry projektu w wypełnieniu
              dokumentów rekrutacyjnych.
            </p>
          </div>
        </div>
      </div>
      <div className="container pt-15 pt-md-17 pb-13 pb-md-15">

        <div className="row mb-5">
          <div className="col-md-10 col-xl-8 col-xxl-7 mx-auto text-center">

            <h2 className="display-4 mb-4 px-lg-14">Jak zgłosić się do projektu?</h2>
            <p>Komplet dokumentów rekrutacyjnych można składać osobiście w Biurze projektu bądź przesyłać je listownie, kurierem lub e-mailem. </p>
            <p>Na komplet dokumentów rekrutacyjnych składa się:</p>
            <div className="col-lg-12 order-lg-2">
              {doPobrania.map((item) => (
                <ProcessList1 {...item} key={item.no} />
              ))}
            </div>
          </div>
        </div>
        <p className="text-center mt-5">Aby uzyskać więcej informacji prosimy o kontakt z <Link href="/kontakt">Biurem projektu</Link> </p>
      </div>
    </>


  );
}
