export default function({ store, redirect }) {
  if (!store.state.authUser) {
    redirect('/sign-up')
  }
}
