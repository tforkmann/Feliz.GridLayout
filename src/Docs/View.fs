module View

open Domain
open Feliz
open Feliz.Bulma
open Router
open Shared

let menuPart model dispatch =
    let item (t: string) p =
        let isActive =
            if model.CurrentPage = p then [ helpers.isActive ] else []

        Bulma.menuItem.a
            [ yield! isActive
              prop.onClick (fun _ -> (SentToast t) |> dispatch)
              prop.text t
              prop.href (getHref p) ]

    Bulma.menu
        [ Bulma.menuLabel "Feliz.GridLayout"
          Bulma.menuList [ item "Overview" FelizGridLayout ]
          Bulma.menuList
              [ item "Installation" FelizGridLayoutInstallation
                item "Example Grid" FelizGridLayoutExampleGrid ] ]

let contentPart model dispatch =
    match model.CurrentPage with
    | FelizGridLayout -> Views.FelizGridLayout.overview
    | FelizGridLayoutInstallation -> Views.FelizGridLayout.installation
    | FelizGridLayoutExampleGrid -> Views.ExampleGrid.overview


open Zanaptak.TypedCssClasses

type Icon =
    CssClasses<"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css", Naming.PascalCase>

type tailwind = CssClasses<"public/css/tailwind-generated.css", Naming.Verbatim>

let view (model: Model) (dispatch: Msg -> unit) =

    let render =
        Html.div
            [ prop.classes
                [ tailwind.container
                  tailwind.``md:flex``
                  tailwind.``justify-center`` ]
              prop.children
                  [ Bulma.section
                      [ Bulma.tile
                          [ tile.isAncestor
                            prop.children
                                [ Bulma.tile
                                    [ tile.is2
                                      prop.children (menuPart model dispatch) ]
                                  Bulma.tile (contentPart model dispatch) ] ] ] ] ]

    React.router
        [ router.onUrlChanged (parseUrl >> UrlChanged >> dispatch)
          router.children [render] ]
