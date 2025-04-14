/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createOrderItem = /* GraphQL */ `
  mutation CreateOrderItem(
    $input: CreateOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    createOrderItem(input: $input, condition: $condition) {
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
export const updateOrderItem = /* GraphQL */ `
  mutation UpdateOrderItem(
    $input: UpdateOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    updateOrderItem(input: $input, condition: $condition) {
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
export const deleteOrderItem = /* GraphQL */ `
  mutation DeleteOrderItem(
    $input: DeleteOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    deleteOrderItem(input: $input, condition: $condition) {
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
export const createOrderTopping = /* GraphQL */ `
  mutation CreateOrderTopping(
    $input: CreateOrderToppingInput!
    $condition: ModelOrderToppingConditionInput
  ) {
    createOrderTopping(input: $input, condition: $condition) {
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
export const updateOrderTopping = /* GraphQL */ `
  mutation UpdateOrderTopping(
    $input: UpdateOrderToppingInput!
    $condition: ModelOrderToppingConditionInput
  ) {
    updateOrderTopping(input: $input, condition: $condition) {
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
export const deleteOrderTopping = /* GraphQL */ `
  mutation DeleteOrderTopping(
    $input: DeleteOrderToppingInput!
    $condition: ModelOrderToppingConditionInput
  ) {
    deleteOrderTopping(input: $input, condition: $condition) {
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
export const createMenuItem = /* GraphQL */ `
  mutation CreateMenuItem(
    $input: CreateMenuItemInput!
    $condition: ModelMenuItemConditionInput
  ) {
    createMenuItem(input: $input, condition: $condition) {
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
export const updateMenuItem = /* GraphQL */ `
  mutation UpdateMenuItem(
    $input: UpdateMenuItemInput!
    $condition: ModelMenuItemConditionInput
  ) {
    updateMenuItem(input: $input, condition: $condition) {
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
export const deleteMenuItem = /* GraphQL */ `
  mutation DeleteMenuItem(
    $input: DeleteMenuItemInput!
    $condition: ModelMenuItemConditionInput
  ) {
    deleteMenuItem(input: $input, condition: $condition) {
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
export const createMenuCategory = /* GraphQL */ `
  mutation CreateMenuCategory(
    $input: CreateMenuCategoryInput!
    $condition: ModelMenuCategoryConditionInput
  ) {
    createMenuCategory(input: $input, condition: $condition) {
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
export const updateMenuCategory = /* GraphQL */ `
  mutation UpdateMenuCategory(
    $input: UpdateMenuCategoryInput!
    $condition: ModelMenuCategoryConditionInput
  ) {
    updateMenuCategory(input: $input, condition: $condition) {
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
export const deleteMenuCategory = /* GraphQL */ `
  mutation DeleteMenuCategory(
    $input: DeleteMenuCategoryInput!
    $condition: ModelMenuCategoryConditionInput
  ) {
    deleteMenuCategory(input: $input, condition: $condition) {
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
export const createTopping = /* GraphQL */ `
  mutation CreateTopping(
    $input: CreateToppingInput!
    $condition: ModelToppingConditionInput
  ) {
    createTopping(input: $input, condition: $condition) {
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
export const updateTopping = /* GraphQL */ `
  mutation UpdateTopping(
    $input: UpdateToppingInput!
    $condition: ModelToppingConditionInput
  ) {
    updateTopping(input: $input, condition: $condition) {
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
export const deleteTopping = /* GraphQL */ `
  mutation DeleteTopping(
    $input: DeleteToppingInput!
    $condition: ModelToppingConditionInput
  ) {
    deleteTopping(input: $input, condition: $condition) {
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
export const createNews = /* GraphQL */ `
  mutation CreateNews(
    $input: CreateNewsInput!
    $condition: ModelNewsConditionInput
  ) {
    createNews(input: $input, condition: $condition) {
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
export const updateNews = /* GraphQL */ `
  mutation UpdateNews(
    $input: UpdateNewsInput!
    $condition: ModelNewsConditionInput
  ) {
    updateNews(input: $input, condition: $condition) {
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
export const deleteNews = /* GraphQL */ `
  mutation DeleteNews(
    $input: DeleteNewsInput!
    $condition: ModelNewsConditionInput
  ) {
    deleteNews(input: $input, condition: $condition) {
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
