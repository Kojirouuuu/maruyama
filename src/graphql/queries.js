/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMenuItem = /* GraphQL */ `
  query GetMenuItem($id: ID!) {
    getMenuItem(id: $id) {
      id
      name
      description
      price
      categoryId
      isSeasonal
      isTakeout
      imagePath
      riceSizeOptions
      gramOptions
      sauceOptions
      allergenInfo
      createdAt
      category {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      orderItems {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const listMenuItems = /* GraphQL */ `
  query ListMenuItems(
    $filter: ModelMenuItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMenuItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        price
        categoryId
        isSeasonal
        isTakeout
        imagePath
        riceSizeOptions
        gramOptions
        sauceOptions
        allergenInfo
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const menuItemsByCategoryId = /* GraphQL */ `
  query MenuItemsByCategoryId(
    $categoryId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMenuItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    menuItemsByCategoryId(
      categoryId: $categoryId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        price
        categoryId
        isSeasonal
        isTakeout
        imagePath
        riceSizeOptions
        gramOptions
        sauceOptions
        allergenInfo
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      name
      role
      gender
      birthdate
      createdAt
      orders {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        name
        role
        gender
        birthdate
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      userId
      status
      paymentStatus
      paymentMethod
      totalPrice
      takeoutMethod
      pickupTime
      createdAt
      user {
        id
        email
        name
        role
        gender
        birthdate
        createdAt
        updatedAt
        __typename
      }
      items {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        status
        paymentStatus
        paymentMethod
        totalPrice
        takeoutMethod
        pickupTime
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const ordersByUserId = /* GraphQL */ `
  query OrdersByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        status
        paymentStatus
        paymentMethod
        totalPrice
        takeoutMethod
        pickupTime
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOrderItem = /* GraphQL */ `
  query GetOrderItem($id: ID!) {
    getOrderItem(id: $id) {
      id
      orderId
      menuItemId
      quantity
      priceAtOrder
      riceSize
      gram
      sauce
      order {
        id
        userId
        status
        paymentStatus
        paymentMethod
        totalPrice
        takeoutMethod
        pickupTime
        createdAt
        updatedAt
        __typename
      }
      menuItem {
        id
        name
        description
        price
        categoryId
        isSeasonal
        isTakeout
        imagePath
        riceSizeOptions
        gramOptions
        sauceOptions
        allergenInfo
        createdAt
        updatedAt
        __typename
      }
      toppings {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listOrderItems = /* GraphQL */ `
  query ListOrderItems(
    $filter: ModelOrderItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        orderId
        menuItemId
        quantity
        priceAtOrder
        riceSize
        gram
        sauce
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const orderItemsByOrderId = /* GraphQL */ `
  query OrderItemsByOrderId(
    $orderId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderItemsByOrderId(
      orderId: $orderId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        orderId
        menuItemId
        quantity
        priceAtOrder
        riceSize
        gram
        sauce
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const orderItemsByMenuItemId = /* GraphQL */ `
  query OrderItemsByMenuItemId(
    $menuItemId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderItemsByMenuItemId(
      menuItemId: $menuItemId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        orderId
        menuItemId
        quantity
        priceAtOrder
        riceSize
        gram
        sauce
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOrderTopping = /* GraphQL */ `
  query GetOrderTopping($id: ID!) {
    getOrderTopping(id: $id) {
      id
      orderItemId
      toppingId
      orderItem {
        id
        orderId
        menuItemId
        quantity
        priceAtOrder
        riceSize
        gram
        sauce
        createdAt
        updatedAt
        __typename
      }
      topping {
        id
        name
        price
        imageUrl
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listOrderToppings = /* GraphQL */ `
  query ListOrderToppings(
    $filter: ModelOrderToppingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderToppings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        orderItemId
        toppingId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const orderToppingsByOrderItemId = /* GraphQL */ `
  query OrderToppingsByOrderItemId(
    $orderItemId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderToppingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderToppingsByOrderItemId(
      orderItemId: $orderItemId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        orderItemId
        toppingId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const orderToppingsByToppingId = /* GraphQL */ `
  query OrderToppingsByToppingId(
    $toppingId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderToppingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orderToppingsByToppingId(
      toppingId: $toppingId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        orderItemId
        toppingId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMenuCategory = /* GraphQL */ `
  query GetMenuCategory($id: ID!) {
    getMenuCategory(id: $id) {
      id
      name
      items {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listMenuCategories = /* GraphQL */ `
  query ListMenuCategories(
    $filter: ModelMenuCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMenuCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTopping = /* GraphQL */ `
  query GetTopping($id: ID!) {
    getTopping(id: $id) {
      id
      name
      price
      imageUrl
      orderToppings {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listToppings = /* GraphQL */ `
  query ListToppings(
    $filter: ModelToppingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listToppings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        price
        imageUrl
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getNews = /* GraphQL */ `
  query GetNews($id: ID!) {
    getNews(id: $id) {
      id
      title
      content
      imageUrl
      publishedAt
      isPublished
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listNews = /* GraphQL */ `
  query ListNews(
    $filter: ModelNewsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        imageUrl
        publishedAt
        isPublished
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
