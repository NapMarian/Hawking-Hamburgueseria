// Common types used across the application
export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: string
  imageUrl?: string
  available: boolean
}

export interface Order {
  id: string
  customerName: string
  customerPhone: string
  customerEmail: string
  items: MenuItem[]
  totalAmount: number
  specialRequests?: string
  status: 'pending' | 'preparing' | 'ready' | 'completed'
  orderType: 'takeaway' | 'delivery'
  createdAt: Date
  updatedAt: Date
}

export interface Category {
  id: string
  name: string
  displayOrder: number
  createdAt: Date
}