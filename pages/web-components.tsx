import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { defineCustomElements } from 'web-components/loader';
import Link from 'next/link'

export const WebComponents: NextPage = () => {
    defineCustomElements();

    return (
        <div className={styles.container}>

            <Link href="/">
                <a>Home</a>
            </Link>

            <h1>Web Components</h1>

            <br />
            <br />
            <br />
            <p>Simple button</p>
            {/* <gv-button>Button</gv-button> */}

            <br />
            <br />
            <br />
            <p>Simple number display</p>
            {/* <gv-number attribute-number="999">888</gv-number> */}

            <br />
            <br />
            <br />
            <p>Simple string display</p>
            {/* <gv-test name="Albert" lastname="the 4th" birthdate="2001-01-31"></gv-test> */}

            <br />
            <br />
            <br />
            <p>Simple rdf call display</p>
            {/* <gv-person-rdf pk-entity="i836415"></gv-person-rdf> */}

        </div>
    )
}

export default WebComponents