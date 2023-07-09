return {
  'ms-jpq/coq_nvim',
  build = "python3 -m coq deps",
  config = function()
    local lspconfig = require('lspconfig')

    local servers = require('core.lsp-list')
    for _, lsp in ipairs(servers) do
      lspconfig[lsp].setup(require('coq').lsp_ensure_capabilities({
      }))
    end
    require "coq"
  end,
  dependencies = {
    'ms-jpq/coq.artifacts',
    'ms-jpq/coq.thirdparty',
  },
}
