export default function({ store, redirect, route }) {
  if (!store.state.hasToken && route.name !== 'index') {
    redirect('/')
  } else if (
    store.state.hasToken &&
    !store.state.authUser &&
    route.name !== 'sign-up'
  ) {
    redirect('/sign-up')
  }
}
