/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMenuItem = /* GraphQL */ `
  subscription OnCreateMenuItem($filter: ModelSubscriptionMenuItemFilterInput) {
    onCreateMenuItem(filter: $filter) {
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
export const onUpdateMenuItem = /* GraphQL */ `
  subscription OnUpdateMenuItem($filter: ModelSubscriptionMenuItemFilterInput) {
    onUpdateMenuItem(filter: $filter) {
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
export const onDeleteMenuItem = /* GraphQL */ `
  subscription OnDeleteMenuItem($filter: ModelSubscriptionMenuItemFilterInput) {
    onDeleteMenuItem(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onCreateOrder(filter: $filter) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onUpdateOrder(filter: $filter) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
    onDeleteOrder(filter: $filter) {
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
export const onCreateOrderItem = /* GraphQL */ `
  subscription OnCreateOrderItem(
    $filter: ModelSubscriptionOrderItemFilterInput
  ) {
    onCreateOrderItem(filter: $filter) {
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
export const onUpdateOrderItem = /* GraphQL */ `
  subscription OnUpdateOrderItem(
    $filter: ModelSubscriptionOrderItemFilterInput
  ) {
    onUpdateOrderItem(filter: $filter) {
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
export const onDeleteOrderItem = /* GraphQL */ `
  subscription OnDeleteOrderItem(
    $filter: ModelSubscriptionOrderItemFilterInput
  ) {
    onDeleteOrderItem(filter: $filter) {
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
export const onCreateOrderTopping = /* GraphQL */ `
  subscription OnCreateOrderTopping(
    $filter: ModelSubscriptionOrderToppingFilterInput
  ) {
    onCreateOrderTopping(filter: $filter) {
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
export const onUpdateOrderTopping = /* GraphQL */ `
  subscription OnUpdateOrderTopping(
    $filter: ModelSubscriptionOrderToppingFilterInput
  ) {
    onUpdateOrderTopping(filter: $filter) {
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
export const onDeleteOrderTopping = /* GraphQL */ `
  subscription OnDeleteOrderTopping(
    $filter: ModelSubscriptionOrderToppingFilterInput
  ) {
    onDeleteOrderTopping(filter: $filter) {
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
export const onCreateMenuCategory = /* GraphQL */ `
  subscription OnCreateMenuCategory(
    $filter: ModelSubscriptionMenuCategoryFilterInput
  ) {
    onCreateMenuCategory(filter: $filter) {
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
export const onUpdateMenuCategory = /* GraphQL */ `
  subscription OnUpdateMenuCategory(
    $filter: ModelSubscriptionMenuCategoryFilterInput
  ) {
    onUpdateMenuCategory(filter: $filter) {
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
export const onDeleteMenuCategory = /* GraphQL */ `
  subscription OnDeleteMenuCategory(
    $filter: ModelSubscriptionMenuCategoryFilterInput
  ) {
    onDeleteMenuCategory(filter: $filter) {
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
export const onCreateTopping = /* GraphQL */ `
  subscription OnCreateTopping($filter: ModelSubscriptionToppingFilterInput) {
    onCreateTopping(filter: $filter) {
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
export const onUpdateTopping = /* GraphQL */ `
  subscription OnUpdateTopping($filter: ModelSubscriptionToppingFilterInput) {
    onUpdateTopping(filter: $filter) {
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
export const onDeleteTopping = /* GraphQL */ `
  subscription OnDeleteTopping($filter: ModelSubscriptionToppingFilterInput) {
    onDeleteTopping(filter: $filter) {
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
export const onCreateNews = /* GraphQL */ `
  subscription OnCreateNews($filter: ModelSubscriptionNewsFilterInput) {
    onCreateNews(filter: $filter) {
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
export const onUpdateNews = /* GraphQL */ `
  subscription OnUpdateNews($filter: ModelSubscriptionNewsFilterInput) {
    onUpdateNews(filter: $filter) {
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
export const onDeleteNews = /* GraphQL */ `
  subscription OnDeleteNews($filter: ModelSubscriptionNewsFilterInput) {
    onDeleteNews(filter: $filter) {
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
