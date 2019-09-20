export default () => {
  const fixVh = () =>
    document.documentElement.style.setProperty(
      '--vh',
      `${window.innerHeight * 0.01}px`
    )

  fixVh()

  window.addEventListener('resize', fixVh)

  return () => window.removeEventListener('resize', fixVh)
}
