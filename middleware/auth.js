export default function({ store, redirect, route }) {
  if ((!store.state.web3 || !store.state.hasAccess) && route.name !== 'index') {
    // Doesn't have an access NFT and isn't on landing page
    redirect('/')
  } else if (
    store.state.web3 &&
    store.state.hasAccess && // Has the access NFT
    !store.state.hasKeys && // But doesn't have eddsa keys
    route.name !== 'sign-up' // And isn't on the sign-up page
  ) {
    redirect('/sign-up')
  } else if (
    store.state.web3 &&
    store.state.hasAccess && // Has the access NFT
    store.state.hasKeys && // And has eddsa keys
    route.name !== 'vote' // And isn't on the vote page
  ) {
    redirect('/vote')
  }
}
