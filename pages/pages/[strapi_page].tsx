import type { NextPage } from 'next'
import { GvButton, GvNumber, GvPersonRdf, GvTest } from 'react-components'
import styles from '../../styles/Home.module.css'

export const Strapi: NextPage = (props: any) => {
    const blocks = props.body

    console.log(blocks)

    return (
        <div className={styles.container}>
            {blocks.map((b:any) => blockManagement(b))}

        </div>
    )
}

export default Strapi


export async function getStaticProps(context:any) {
    const name = context.params.strapi_page
    const url = process.env.STRAPI_PAGES_URL + '?name=' + name + '&populate=*'
    const strapi_body = await (await fetch(url)).json()

    return {props: strapi_body.data[0].attributes}
}

export async function getStaticPaths() {
    // here we get all the pages available on strapi
    let page_names = await (await fetch(process.env.STRAPI_PAGES_URL as string)).json()
    page_names = page_names.data.map((p: any) => p.attributes.name)

    // transform to nextjs data
    const paths = page_names.map((name: string) => ({
        params: { strapi_page: name }
    }))

    return { paths, fallback: 'blocking' }
    // { fallback: blocking } will server-render pages
    // on-demand if the path doesn't exist
}


function blockManagement(block: any) {
    if(block.__component == 'base.primaries')  {
        if (block.text) return <h1>{block.text}</h1>
        return <h1>Unknown base element</h1>
    }
    if(block.__component == 'gv.gv-button') return <GvButton>{block.text}</GvButton>
    if(block.__component == 'gv.gv-number') return <GvNumber attribute-number={block.attribute}>{block.content}</GvNumber>
    if(block.__component == 'gv.gv-person-rdf') return <GvPersonRdf pk-entity={block.pkEntity}></GvPersonRdf>
    if(block.__component == 'gv.gv-test') return <GvTest name={block.name} lastname={block.lastname} birthdate={block.birthdate}></GvTest>

}