return {
  'gbprod/nord.nvim',
  config = function()
    require('nord').setup({
      transparent = false,
    })
    vim.cmd [[ colorscheme nord ]]
  end,
}
