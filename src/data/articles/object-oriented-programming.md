
---
title: Object-Oriented Programming Through Practical Examples
description: Understanding classes, objects, encapsulation, inheritance, polymorphism and abstraction through practical Python examples.
category: Python and Software Development
date: 2026-06-15
---

# Object-Oriented Programming Through Practical Examples

Object-Oriented Programming (OOP) is a programming paradigm that organises software around objects.

An object combines data and the operations that work with that data.

OOP is widely used in application development because it provides ways to structure code and manage complexity.

Understanding OOP is useful when developing backend applications and working with larger software systems.

Python supports object-oriented programming through classes and objects.

## 1. Understanding Classes and Objects

A class defines the structure and behaviour of objects.

An object is an instance of a class.

Consider a simple example:

```python
class Student:
    def __init__(self, name, course):
        self.name = name
        self.course = course

    def introduce(self):
        return f"I am {self.name}. I study {self.course}."


student = Student("Ananya", "Computer Science")

print(student.introduce())
```

Output:

```text
I am Ananya. I study Computer Science.
```

In this example:

- `Student` is the class.
- `student` is an object.
- `name` and `course` are instance attributes.
- `introduce()` is an instance method.
- `__init__()` initialises the object.

The `self` parameter refers to the current object.

It allows methods to access that object's attributes and other methods.

## 2. Encapsulation

Encapsulation means grouping data and related behaviour within a class.

It also involves controlling how internal state is accessed and modified.

Consider a bank account:

```python
class BankAccount:
    def __init__(self, balance):
        self.__balance = balance

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Amount must be positive")

        self.__balance += amount

    def get_balance(self):
        return self.__balance


account = BankAccount(1000)

account.deposit(500)

print(account.get_balance())
```

Output:

```text
1500
```

The `__balance` attribute uses Python's name-mangling convention.

This discourages direct access from outside the class.

It is not strict private access control. Python relies heavily on conventions and developer discipline.

Encapsulation helps protect internal state by exposing controlled operations.

## 3. Inheritance

Inheritance allows a class to reuse or extend behaviour from another class.

The existing class is called the parent or base class.

The new class is called the child or derived class.

```python
class Employee:
    def __init__(self, name):
        self.name = name

    def display_role(self):
        return "Employee"


class Developer(Employee):
    def display_role(self):
        return "Software Developer"


developer = Developer("Ananya")

print(developer.name)
print(developer.display_role())
```

Output:

```text
Ananya
Software Developer
```

The `Developer` class inherits the constructor and attributes from `Employee`.

It also provides its own implementation of `display_role()`.

Inheritance is useful when related classes share common behaviour.

However, deep inheritance hierarchies can make software difficult to understand.

Composition is often a better choice when one object simply needs to use another object.

## 4. Polymorphism

Polymorphism means that different objects can respond to the same operation in different ways.

Consider two notification services:

```python
class EmailNotification:
    def send(self, message):
        print(f"Email sent: {message}")


class SMSNotification:
    def send(self, message):
        print(f"SMS sent: {message}")


def notify(service, message):
    service.send(message)


email = EmailNotification()
sms = SMSNotification()

notify(email, "Your account is active")
notify(sms, "Your account is active")
```

Both classes provide a `send()` method.

The `notify()` function does not need to know the internal implementation of each service.

It only needs an object that supports the expected operation.

Python supports this style through duck typing.

This is useful when designing systems that work with interchangeable components.

## 5. Abstraction

Abstraction focuses on exposing essential behaviour while hiding implementation details.

Python supports abstract base classes through the `abc` module.

```python
from abc import ABC, abstractmethod


class PaymentProcessor(ABC):

    @abstractmethod
    def process_payment(self, amount):
        pass


class CardPayment(PaymentProcessor):

    def process_payment(self, amount):
        return f"Processing card payment of {amount}"


payment = CardPayment()

print(payment.process_payment(500))
```

The abstract class defines a required interface.

Concrete classes provide the actual implementation.

Abstraction is useful when multiple components must follow a common contract.

## 6. Composition

Composition means building a class by combining objects that provide specific functionality.

Consider a car that contains an engine.

```python
class Engine:
    def start(self):
        return "Engine started"


class Car:
    def __init__(self, engine):
        self.engine = engine

    def start(self):
        return self.engine.start()


engine = Engine()
car = Car(engine)

print(car.start())
```

The `Car` class does not need to implement engine behaviour itself.

It uses an Engine object.

Composition reduces unnecessary inheritance and makes components easier to replace or test.

## 7. Class Variables and Instance Variables

Class variables belong to the class and are shared by its instances unless overridden.

Instance variables belong to individual objects.

```python
class Employee:
    company = "Example Technologies"

    def __init__(self, name):
        self.name = name


employee_one = Employee("Ananya")
employee_two = Employee("Rahul")

print(employee_one.company)
print(employee_two.company)

print(employee_one.name)
print(employee_two.name)
```

Both objects share the class variable `company`.

Their `name` attributes are different.

Understanding this distinction is important when managing shared configuration or object-specific state.

## 8. Static Methods and Class Methods

Python provides different method types for different responsibilities.

### Instance method

An instance method receives `self` and can access instance state.

### Class method

A class method receives `cls` and can work with class-level state.

```python
class Employee:
    company = "Example Technologies"

    def __init__(self, name):
        self.name = name

    @classmethod
    def change_company(cls, name):
        cls.company = name

    @staticmethod
    def is_valid_name(name):
        return isinstance(name, str) and len(name.strip()) > 0
```

A static method does not automatically receive the instance or class.

It is useful for a related operation that does not require either.

## 9. OOP in Real Applications

OOP can help organise many types of software systems.

For example:

**Backend applications:** User and order models can represent application entities.

**Payment systems:** Different payment processors can implement a common interface.

**AI applications:** Model clients and retrieval components can be represented as separate objects.

**Data processing:** Different processing strategies can be implemented through interchangeable classes.

**Enterprise applications:** Business entities and services can be organised into clear modules.

The objective is not to create a class for everything.

The objective is to use object-oriented design when it improves structure and maintainability.

## 10. Common OOP Design Mistakes

### Excessive inheritance

Deep inheritance structures can create tightly coupled code.

Prefer simpler relationships when possible.

### Large classes

A class that manages unrelated responsibilities becomes difficult to maintain.

Separate responsibilities into smaller components.

### Unnecessary abstraction

Creating interfaces and multiple layers without a real requirement can make simple code harder to understand.

### Poor encapsulation

Allowing unrelated parts of an application to modify internal state can introduce unexpected behaviour.

### Ignoring composition

Inheritance is not the only way to reuse functionality.

Composition often provides greater flexibility.

## 11. Connection to Software Design Principles

OOP is closely related to several software design principles.

The SOLID principles are a well-known set of guidelines:

- Single Responsibility Principle.
- Open-Closed Principle.
- Liskov Substitution Principle.
- Interface Segregation Principle.
- Dependency Inversion Principle.

These principles encourage maintainable and loosely coupled software.

They are not rigid rules that must be applied mechanically.

Good design depends on the actual requirements of the application.

## Conclusion

Object-Oriented Programming provides a way to organise software around objects and their responsibilities.

Classes and objects form its foundation.

Encapsulation helps manage internal state. Inheritance supports reuse. Polymorphism allows interchangeable behaviour. Abstraction separates interfaces from implementation. Composition allows systems to be built from smaller components.

Understanding these concepts is useful for writing structured Python code and developing maintainable software applications.

## Further Exploration

- Clean Code and Code Quality.
- Python for AI Engineering.
- Software Development Fundamentals.
- Backend Architecture.
