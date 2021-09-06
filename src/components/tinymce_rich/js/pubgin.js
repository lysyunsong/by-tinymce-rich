const req = require.context('../plugins/', true, /plugin.min.js/)

const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)