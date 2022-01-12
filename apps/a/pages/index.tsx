import { NextPage } from 'next'
import { runtimeProcessEnv } from '@turborepo-test/components/services/helpers'

const Home: NextPage = () => {
    return (
        <div>
            <div>{`The preview value is "A", the prod is "B"`}</div>
            <div>{`The current value is "${runtimeProcessEnv().TEST_VALUE}"`}</div>
        </div>
    )
}

export default Home
