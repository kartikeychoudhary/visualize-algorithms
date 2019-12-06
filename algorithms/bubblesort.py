import json

class BubbleSort:
    def __init__(self, array):
        self.length = len(array)
        self.array = array
        self.reset = array[:]
    
    def resetArray(self):
        self.array = self.reset[:]
    
    def info(self):
        print("Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.")
        print("\n")
        print("Worst and Average Case Time Complexity : O(n*n)")
        print("Best Case Time Complexity : O(n)")
        print("Auxiliary Space : O(1)")

    def help(self):
        msg = "BubbleSort Algorithm \n\n " \
          "Use sort() : To sort the list (Array) \n " \
          "Use sortSteps() : To get list of all steps to sort using bubblesort (in Json Form) \n "
        print(msg)
        self.info()

    def sort(self):
        # Traverse through all array elements
        for i in range(self.length):
            swapped = False
            # Last i elements are already in place
            for j in range(self.length-i-1):
                if self.array[j] > self.array[j+1]:
                    self.array[j], self.array[j+1] = self.array[j+1], self.array[j]
                    swapped = True
            
            if not swapped:
                break
        return self.array
    
    def sortSteps(self):
        self.resetArray()
        steps = []
        # Traverse through all array elements
        for i in range(self.length):
            swapped = False
            # Last i elements are already in place
            for j in range(self.length-i-1):
                if self.array[j] > self.array[j+1]:
                    self.array[j], self.array[j+1] = self.array[j+1], self.array[j]
                    swapped = True
                    steps.append({"array":self.array[:], "index":[j, j+1],"swap":True})
                else:
                    steps.append({"array":self.array[:],"index":[j, j+1],"swap":False})
            if not swapped:
                break
        return json.dumps(steps)



    
    