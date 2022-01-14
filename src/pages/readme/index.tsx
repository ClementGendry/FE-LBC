import { NextPage } from "next";
import Layout from "../../components/Layout/layout";

const ReadMe: NextPage = (): JSX.Element => {
    return (
        <Layout>
            <div>
                <p><u>Étapes et logique:</u></p>
                <p>
                    N&apos;ayant aucun savoir sur le framework, j&apos;ai choisi d&apos;acquérir quelques connaissances sur le NextJS.
                    J&apos;ai pu passer deux journées à en comprendre les fondements, fonctionnement, le lifeCycle etc.
                </p>
                <p>
                    Ma première logique à été de fetcher le tout dans un getStaticProps (vous pourrez voir les commentaires laissés
                    volontairement pour le pre-rendering initial des conversations <b>`getStaticPaths`</b>). Seulement, le pre-rendering posait
                    problème pour les staticPaths des conversations par user puisque je n&apos;avais pas accès au userId dans la page messages.
                </p>
                <p>
                    Après plusieures recherches les routes dynamiques et l&apos;api route me semblaient une bonne initiative
                    jusqu&apos;à ce que je lise cette précision dans la documentation Next :
                </p>
                <p>
                    <b><i>`You should not fetch an API route from getStaticProps`</i></b>
                </p>
                <p>
                    J&apos;ai donc choisi de mettre en place un store redux pour y stocker la donnée et y avoir accès par la suite et donc 
                    pre-render mes pages correctement avec staticPaths.
                </p>
                <p>
                    Oui mais voilà. Le soucis était ici différent, un Hook ne peut être effectué qu&apos;a l&apos;intérieur d&apos;un
                    functional component et donc non accessible dans le <b>getStaticProps</b>.
                    Le NextJS avec redux, c&apos;est beaucoup moins simple que sur une arbo React basique puisque next ne preserve pas
                    le store lors du SSR (si j&apos;ai bien compris). J&apos;ai tenté de mettre en place un <u>`next-redux-wrapper`</u> avec une hydration (HYDRATE fournit par le package),
                    mais impossible de dispatcher quoi que ce soit (également le store.dispatch est encore présent en commentaires dans le code).
                </p>
                <p>
                    Bien trop tard j&apos;ai utilisé le context pour fetcher les conversations grace au <b>params.id</b> de l&apos;url et bien évidemment, 
                    vu que les données sont changées regulièrement, c&apos;est bien le getServerSideProps qu&apos;il fallait utiliser. Également si j'ai bien appris ma leçon,
                    getServerSideProps est efficace pour les données régulièrement mises à jour. Ici avec la possibilité de créer de nouveaux messages, de nouvelles conversations, cette
                    méthode me semblait plus judicieuse au final.
                </p>
                <p>
                    Le test n&apos;est pas terminé malheureusement mais 5 jours se sont écoulés et je repsecte ici la demande de Géraldine.
                </p>
                <p>
                    J'ai laissé le reducer, les types, les actions dans le dossier `/store/users` si vous souhaitez prendre connaissance de cette partie même non utilisée
                </p>
                <p>
                    Les étapes restantes seraient : 
                </p>
                <ul>
                    <li>Créer un composant input avec un useState/setState, onChange sur cet input avec un param (event) pour récupérer sa donnée. Evidemment vérifier avec une regEx
                        qu&apos;aucune balise Script ne soit présente pour éviter les injections</li>
                    <li>Créer un bouton submit pour POST le résultat dans l&apos;API fournie et re-render la page</li>
                    <li>Implémenter le SASS pour la lisibilité du code css et notamment la réutilisabilité de code (beaucoup de doublons et de couleur a variabiliser)</li>
                    <li>Les tests unitaires pour chaque composant</li>
                    <li>...</li>
                </ul>
                <p>
                    J&apos;ai néanmoins pris plaisir à apprendre le Next et souhaterais monter en compétence sur ce framework. Si vous le souhaitez, et j&apos;en serai ravi même si embauche
                    il n&apos;y a pas, je voudrais échanger avec vous pour m&apos;aiguiller et me permettre de finaliser ce test dans la bonne direction à titre personnel.
                </p>
            </div>
        </Layout>
    )
}

export default ReadMe;