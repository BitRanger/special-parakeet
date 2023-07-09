return {
  'ellisonleao/gruvbox.nvim',
  config = function()
    vim.o.termguicolors = true
    vim.cmd [[ colorscheme gruvbox ]]
  end,
}
