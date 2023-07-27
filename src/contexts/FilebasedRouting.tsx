/* eslint-disable @typescript-eslint/no-explicit-any */
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import ErrorFallback from '@/components/ErrorFallback'
import { ErrorBoundary } from 'react-error-boundary'

// const baseFolder = "./pages"

const FileBasedRoutingContext = React.createContext({})
export const FileBasedRoutingProvider = () => {
  const getExplodedFilename = (path: string) => path.split('/')

  const layouts: Record<string, any> = import.meta.glob(
    '../pages/**/layout.tsx',
    {
      eager: true,
    }
  )
  const pages: Record<string, any> = import.meta.glob('../pages/**/page.tsx', {
    eager: true,
  })

  const findInLayouts = (path: string) => {
    for (const layoutPath of Object.keys(layouts)) {
      if (layoutPath === path) {
        return layouts[layoutPath]
      }
    }
    return null
  }

  // const buildLayoutElement: ReactNode.JSX.Element = (paths: any[]) => {
  const LayoutElement: any = (paths: any[]) => {
    if (paths.length === 0) return null

    const Element = paths[0].default

    const slice = paths.slice(1)
    const layoutElements = slice ? LayoutElement(slice) : null
    if (layoutElements === null) return <Element />
    return <Element>{layoutElements}</Element>
  }

  function getNestedLayouts(path: string) {
    const explodedPath = getExplodedFilename(path).slice(0, -1)
    const layouts = []

    for (let i = 0; i <= explodedPath.length; i++) {
      const path = explodedPath.slice(0, i).join('/')

      const layoutFound = findInLayouts(path + '/layout.tsx')
      if (layoutFound) {
        layouts.push(layoutFound)
      }
    }

    return layouts
  }

  const routes = []
  for (const path of Object.keys(pages)) {
    const pathArray = path.split('/').slice(2)
    const fileName = pathArray[pathArray.length - 1]
    if (!fileName) {
      continue
    }

    const pathArrayWithParams = pathArray.map((x) => {
      if (x.startsWith('[')) {
        return `:${x.slice(1, -1)}`
      }
      return x
    })

    // with params ([id] => :id) and without last element (page.tsx)
    const finalPath = '/' + pathArrayWithParams.slice(0, -1).join('/')
    const layouts = getNestedLayouts(path)
    const ElementWithLayout = LayoutElement([...layouts, pages[path]])

    routes.push({
      path: finalPath,
      Element: ElementWithLayout,
      loader: pages[path]?.loader,
      action: pages[path]?.action,
    })
  }

  console.log(routes)

  const router = createBrowserRouter(
    routes.map(({ Element, ...rest }) => ({
      ...rest,
      element: Element,
    }))
  )

  return (
    <FileBasedRoutingContext.Provider value={{}}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </FileBasedRoutingContext.Provider>
  )
}
