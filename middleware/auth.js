export default function({ store, redirect, route }) {
  if (
    (!store.state.account || !store.state.hasAccess) &&
    route.name !== 'index'
  ) {
    // Doesn't have an access NFT and isn't on landing page
    redirect('/')
  } else if (
    store.state.account &&
    store.state.hasAccess && // Has the access NFT
    !store.state.localStorage.validKeys.privKey && // But doesn't have eddsa keys
    route.name !== 'get-keys' // And isn't on the get-keys page
  ) {
    redirect('/get-keys')
  } else if (
    store.state.account &&
    store.state.hasAccess && // Has the access NFT
    store.state.localStorage.validKeys.privKey && // And has eddsa keys
    route.name !== 'vote' // And isn't on the vote page
  ) {
    redirect('/vote')
  }
}
