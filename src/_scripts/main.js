import '../_styles/main.sass'
import '../_modules/link/link.sass'
import '../_modules/button/button.sass'
import '../_modules/icon/icon.sass'

function requireAll (r) {
  r.keys().forEach(r)
}

requireAll(require.context('../_images/icons/', true, /\.svg$/))
