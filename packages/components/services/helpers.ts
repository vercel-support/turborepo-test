import getConfig from 'next/config'

export const runtimeProcessEnv = () => {
    const { publicRuntimeConfig } = getConfig()

    return publicRuntimeConfig as App.ProcessEnv
}
