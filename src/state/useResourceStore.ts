import { create } from 'zustand'

export type UrlResource = {
  type: 'url'
  url: string
}

export type ImageResource = {
  type: 'image'
  src: string
  fileName: string
}

export type Resource = { id: number } & (UrlResource | ImageResource)

type ResourceStore = {
  resources: Resource[]
  addResource: (urlResource: UrlResource | ImageResource) => void
  editResource: (
    id: number,
    urlResource: Omit<UrlResource, 'type'> | Omit<ImageResource, 'type'>
  ) => void
  removeResource: (id: number) => void
  selectedResourceId: number | null
  setSelectedResourceId: (selctedResourceId: number | null) => void
}

const useResourceStore = create<ResourceStore>((set) => ({
  resources: [
    {
      id: 1,
      type: 'url',
      url: 'https://www.robinwieruch.de/react-libraries/',
    },
    {
      id: 2,
      type: 'url',
      url: 'https://typed.do/blog-kr/how-to-make-good-usability-product/',
    },
  ],
  addResource: (resource) =>
    set((state) => {
      const id =
        Math.max(...state.resources.map((resource) => resource.id), 0) + 1

      return {
        resources: state.resources.concat({ ...resource, id }),
      }
    }),
  editResource: (id, newResource) =>
    set((state) => ({
      resources: state.resources.map((resource) =>
        resource.id === id ? { ...resource, ...newResource } : resource
      ),
    })),
  removeResource: (id) =>
    set((state) => ({
      resources: state.resources.filter((resource) => resource.id !== id),
    })),
  selectedResourceId: null,
  setSelectedResourceId: (selectedResourceId) =>
    set(() => ({
      selectedResourceId,
    })),
}))

export default useResourceStore
