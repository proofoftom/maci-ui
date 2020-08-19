export default (context, inject) => {
  const provider = window.ethereum // eslint-disable-line
  let chainId
  let accounts
  provider.on('chainChanged', (_chainId) => {
    if (chainId && _chainId !== chainId) {
      window.location.reload()
    }
    chainId = _chainId
  })
  provider.on('accountsChanged', (_accounts) => {
    if (accounts && _accounts !== accounts) {
      window.location.reload()
    }
    accounts = _accounts
  })

  inject('provider', provider)
}
