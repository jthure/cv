defmodule CVWeb.LayoutView do
  use CVWeb, :view

    def js_script_tag do
    if Mix.env == :prod do
      # In production we'll just reference the file
      "<script src=\"/js/app.jsx\"></script>"
    else
      # In development mode we'll load it from our webpack dev server
      "<script src=\"http://localhost:4000/js/app.jsx\"></script>"
    end
  end

  # Ditto for the css
  def css_link_tag do
    if Mix.env == :prod do
      "<link rel=\"stylesheet\" type=\"text/css\" href=\"/css/app.css\" />"
    else
      "<link rel=\"stylesheet\" type=\"text/css\" href=\"http://localhost:4000/css/app.css\" />"
    end
  end

end
