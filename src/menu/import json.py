import json
import re
from textwrap import indent
from turtle import left
import numpy as np
import heapq

artiste1 = {
    "fname":
    "James",
    "lname":
    "Brown",
    "occupation":
    "Singer",
    "nationality":
    "American",
    "collabos":
    ("Elvis_Presley", "Michael_Jackson", "Diana_Ross", "Luther_Vandross"),
    "awards": {
        "grammy1967": "nominated",
        "grammy1969": "won",
        "grammy1976": "won",
        "grammy1980": "nominated"
    },
}

print(json.dumps(artiste1, indent=4, sort_keys=True))

myText = "Egypt is a cool country with great food that tastes good"
regex = re.search("^food.*cool$", myText)
if regex:
    print("We have a match for those search params")
else:
    print("We do not have a match for those search params")

nextText = "Egypt is a cool country with great food that tastes good"
regex2 = re.search("^Egypt.*good$", nextText)
if regex2:
    print("We have a match")
else:
    print("We do not have a match")

text3 = "Jigawa is a state in northern Nigeria"
regex3 = re.findall("state|local", text3)
if regex3:
    print("At least one matches")
else:
    print("No match in the regex!")

text4 = "The rain in Spain falls mainly in the plain"
regex4 = re.findall("[a - r]", text4)
print(regex4)

#try except, else, finally
try:
    f = open("index.html")
    try:
        f.write("<p>Lorem Ipsum</p>")
    except:
        print("This file is read only")
    finally:
        f.close()
except:
    print("Something else went wrong when opening the file")

try:
    theOffice = [
        "pam", "jim", "michael", "dwight", "meredith", "angela", 'oscar'
    ]
    try:
        theOffice.append("andy")
        print("Andy was added")
    except:
        print("Andy could not be added")
    finally:
        print(theOffice)
except:
    ("Something else went wrong in adding Andy")

#inputs

username = input("Enter username:")
password = input("Enter password:")

print("Username is " + username, " and the password is a secret")

#string formatting
price = 35
qty = 17
productNo = 77791

order = "${:.2f} is an expensive price for {} cartons of milk {}"
print(order.format(price, qty, productNo))


#Recursions
def myRecursion(test):
    if (test < 1):
        return
    else:
        print(test, end=" ")
        myRecursion(test - 1)
        print(test, end=" ")
        return


test = 6
myRecursion(test)


def myNextRecursion(test2):
    if (test2 < 1):
        return
    else:
        print(test2, end=" ")
        myNextRecursion(test2 - 1)
        print(test2, end=" ")
        return


test2 = 7
myNextRecursion(test2)

#fibonacci sequence

  #More effective algorithm
def fib():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b


for index, fibonacci_number in zip(range(50), fib()):
    print("{i:3}: {f:3}".format(i=index, f=fibonacci_number))


def fib2():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b


for index, fibonacci_number in zip(range(10), fib2()):
    print("{i:3}: {f:3}".format(i=index, f=fibonacci_number))

# search algorithm


def search(arr, x, n):
    for i in range(0, n):
        if (arr[i] == x):
            return x
    return -1


arr = [10, 20, 30, 40, 50, 60]
x = 40
n = len(arr)

result = search(arr, x, n)
if (result == -1):
    print("Result is not found in array!")
else:
    print("Element is present at index: ", result)


def search2(arr2, n2, x2):
    for i in range(0, n2):
        if (arr2[i] == x2):
            return x2
    return -1


arr2 = [2, 4, 6, 8, 10]
n2 = len(arr2)
x2 = 10

result2 = (arr2, n2, x2)
if (result2 == -1):
    print("Index not found")
else:
    print("Result found at index: ", result2)

##Monotonic array algorithm

a = [1, 2, 3, 4, 5, 6]
b = [5, 4, 3, 2, 1]
c = [1, 22, 33, 22, 12]


def solution(nums):
    return (all(nums[i] <= nums[i + 1]
                for i in range(len(nums) - 1)) or all(nums[i] >= nums[i + 1])
            for i in range(len(nums) - 1))


print(solution(a))
print(solution(b))
print(solution(c))

#Move zeros

array1 = [0, 1, 0, 3, 12]
array2 = [1, 7, 0, 0, 8, 0, 10, 12, 0, 4]


def solution4(nums):
    for i in nums:
        if 0 in nums:
            nums.remove(0)
            nums.append(0)
    return nums


print(solution4(array1))
print(solution4(array2))

score1 = [10, 23, 12, 20, 25, 0, 0, 18, 9, 0, 4, 8]
score2 = [0, 12, 13, 0, 15, 0, 19, 15, 0, 10]


def solution5(nums):
    for i in nums:
        if 0 in nums:
            nums.remove(0)
            nums.append(0)
            nums.sort()
            nums.reverse()
    return nums


print(solution5(score1))
print(solution5(score2))

#Fill in the blanks algorithm

array3 = [2, None, 3, None, None, 5, 6, 7, None]


def solution6(nums):
    valid = 0
    result = []
    for i in nums:
        if i is not None:
            result.append(i)
            valid = i
        else:
            result.append(valid)
    return result


print(solution6(array3))

#matched and mismatched words

sentence1 = "The quick brown fox jumped over the lazy dog"
sentence2 = "How quick your dog is depends on the training given"


def solution7(sentence1, sentence2):
    set1 = set(sentence1.split())
    set2 = set(sentence2.split())

    return sorted(list(set1 ^ set2)), sorted(list(set1 & set2))


print(solution7(sentence1, sentence2))

#prime numbers array

n = 40


def solution8(n):
    prime_nums = []
    for num in range(n):
        if num > 1:
            for i in range(2, num):
                if (num % i) == 0:
                    break
            else:
                prime_nums.append(num)
    return prime_nums


print(solution8(n))

## set operations

Set = set([1, 2, "Lmao", "Yes", 67, 19, True, False, 34, "Okay"])
print("\nSet with the use of mixed values")
print(Set)

print("\nElements of set: ")
for i in Set:
    print(i, end=" ")
    print()
    print(False in Set)

#frozen set

bigCats = frozenset({"lion", "tiger", "leopard", "jaguar", "cheetah"})

#matrix

myMatrix = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12],
                     [13, 14, 15, 16]])
arrangeMatrix = np.reshape(myMatrix, (4, 4))
print(arrangeMatrix)

strengths = ["finances", "technology", "connections", "patents"]
weaknesses = ["staff_depth", "coverage", "location", "capacity"]
opportunities = ["innovation", "industry_4.0", "AI", "new_markets"]
threats = ["regulations", "lawsuits", "competition", "deliberate_obsolescence"]

swot = np.array([strengths, weaknesses, opportunities, threats])
swotArray = np.reshape(swot, (4, 4))
print(swotArray)

#linked list


class Node:

    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:

    def __init__(self):
        self.head = None


if __name__ == "__main__":
    llist = LinkedList()
    llist.head = Node(1)
    second = Node(2)
    third = Node(3)
    fourth = Node(4)

llist.head.next = second
second.next = third
third.next = fourth

#linked list traversal


class Node2:

    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList2:

    def __init__(self):
        self.head = None

    def printList(self):
        temp = self.head
        while (temp):
            print(temp.data)
            temp = temp.next


if __name__ == "__main__":
    oneList = LinkedList2()
    oneList.head = Node2(1)
    second = Node2(2)
    third = Node2(3)
    fourth = Node2(4)

    oneList.next = second
    second.next = third
    third.next = fourth

    oneList.printList()

#Stack

thisList = []
thisList.append(12)
thisList.append(13)
thisList.append(11)
thisList.append("Stop")
print(thisList)
thisList.pop()
thisList.append("Continue")
print(thisList)

#Queue

cinemaQueue = []

## add movie goers to the list by enqueuing
cinemaQueue.append("Mary")
cinemaQueue.append("Karen")
cinemaQueue.append("James")
cinemaQueue.append("Tyler")
cinemaQueue.append("Imelda")
cinemaQueue.append("Linus")
print("\nEnqueuing elements:")
print(cinemaQueue)
print("\nDequeuing elements:")
cinemaQueue.pop(0)  # removes the first element in each pop()
print(cinemaQueue)
#further pop(0) operations empty the queue

# priority queue (eg for customers who are qualified for business -
# class based on their flying points accumulated)


class BusinessClass(object):

    def __init__(self):
        self.queue = []

    def __str__(self):
        return ' '.join([str(i) for i in self.queue])

    def isEmpty(self):
        return len(self.queue) == 0

    def insert(self, data):
        self.queue.append(data)

    def delete(self):
        try:
            max = 0
            for i in range(len(self.queue)):
                if self.queue[i] > self.queue[max]:
                    max = i
            item = self.queue[max]
            del self.queue[max]
            return item
        except IndexError:
            print()
            exit()


if __name__ == "__main__":
    firstClass = BusinessClass()
    firstClass.insert(200)
    firstClass.insert(140)
    firstClass.insert(240)
    firstClass.insert(260)
    firstClass.insert(100)
    print(firstClass)
    while not firstClass.isEmpty():
        print(
            "\n Allot ticket according to those with the highest firstclass points in waiting list:"
        )
        print(firstClass.delete())

# heap algorithms

myHeap = [9, 3, 14, 6, 9, 10]
heapq.heapify(myHeap)
print("\nCreated heap:")
print(list(myHeap))

heapq.heappush(myHeap, 8)
print("\nAdded new element in heap:")
print(list(myHeap))

print("\nRemoved smallest value in heap:")
print(heapq.heappop(myHeap))

## binary tree algorithm


class Node5:

    def __init__(self, key):
        self.left = None
        self.right = None
        self.val = key


root = Node5(1)
root.left = Node5(2)
root.right = Node5(3)
root.left.left = Node(4)
root.left.right = Node(5)
root.right.left = Node(6)
root.right.right = Node(7)

## binary tree traversal algorithm


class Node6:

    def __init__(self, key):
        self.left = None
        self.right = None
        self.val = key


# Inorder traversal


def InOrder(root):
    if root:
        InOrder(root.left)
        print(root.val)
        InOrder(root.right)


def PreOrder(root):
    if root:
        print(root.val)
        PreOrder(root.left)
        PreOrder(root.right)


def PostOrder(root):
    if root:
        PostOrder(root.left)
        PostOrder(root.right)
        print(root.val)


root = Node6(1)
root.left = Node6(2)
root.right = Node6(3)
root.left.left = Node6(4)
root.left.right = Node6(5)
root.right.left = Node6(6)
root.right.right = Node6(7)

print("PreOrder traversal is: ")
PreOrder(root)

print("InOrder traversal is: ")
InOrder(root)

print("PostOrder traversal is: ")
PostOrder(root)

#binary search algorithm with insert


class Node10:

    def __init__(self, key):
        self.left = None
        self.right = None
        self.val = key


def insert(root, key):
    if root is None:
        return Node(key)
    else:
        if root.val == key:
            return root
        elif root.val < key:
            root.right = insert(root.right, key)
        else:
            root.left = insert(root.left, key)
    return root


    ## postorder binary tree search


def postorder(root):
    if root:
        postorder(root.left)
        postorder(root.right)
        print(root.val)


    #Driver program
thisRoot = Node10(30)
thisRoot = insert(thisRoot, 20)
thisRoot = insert(thisRoot, 10)
thisRoot = insert(thisRoot, 35)
thisRoot = insert(thisRoot, 40)
thisRoot = insert(thisRoot, 50)
thisRoot = insert(thisRoot, 60)

postorder(thisRoot)
