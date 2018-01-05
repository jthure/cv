defmodule CVWeb.PageController do
  use CVWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
