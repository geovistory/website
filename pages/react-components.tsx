import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { GvButton, GvNumber, GvTest, GvPersonRdf } from 'react-components'
import Link from 'next/link'

export const ReactComponents: NextPage = () => {

    return (
        <div className={styles.container}>

            <Link href="/">
                <a>Home</a>
            </Link>

            <h1>React Components</h1>

            <br />
            <br />
            <br />
            <p>Simple button</p>
            <GvButton>test</GvButton>

            <br />
            <br />
            <br />
            <p>Simple number display</p>
            <GvNumber attribute-number="777">888</GvNumber>

            <br />
            <br />
            <br />
            <p>Simple string display</p>
            <GvTest name="Albert" lastname="the 4th" birthdate="2001-01-31"></GvTest>

            <br />
            <br />
            <br />
            <p>Simple rdf call display</p>
            <GvPersonRdf pk-entity="i836415"></GvPersonRdf>

        </div>
    )
}

export default ReactComponents