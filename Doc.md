#Run the app
-clone the repo from https://github.com/mohammedAlabdali96/logic

-open the terminal where you clone the repo

`cd logic`

#run the server 

`cd server`

**install the node packages manger**

`npm i`

**start your server**

`npm start`


#run the client

_open another terminal in the main directory for the project_ 

`cd client`

**install the node packages manger**

`npm i`

start your React App by running:

client should run on prt 3000 

`yarn start`

#QuickSort Algorithm 

_I made one function quickSort in server/routes/sort.js_

I called that function inside the POST request
after getting the Data from the body of the client, And I passed  the sorted data to write in the json file 


The quickSort function based on quickSort algorithm works in the following steps 


STEP 1: Determine pivot as middle element. So, 7 is the pivot element.

STEP 2: Start left and right pointers as first and last elements of the array respectively. So, left pointer is pointing to 5 at index 0 and right pointer is pointing to 9 at index 5.

STEP 3: Compare element at the left pointer with the pivot element. Since, 5 < 6 shift left pointer to the right to index 1.

STEP 4: Now, still 3 <6 so shift left pointer to one more index to the right. So now 7 > 6 stop incrementing the left pointer and now left pointer is at index 2.

STEP 5: Now, compare value at the right pointer with the pivot element. Since 9 > 6 move the right pointer to the left. Now as 2 < 6 stop moving the right pointer.

STEP 6: Swap both values present at left and right pointers with each other.

STEP 7: Move both pointers one more step.

STEP 8: Since 6 = 6, move pointers to one more step and stop as left pointer crosses the right pointer and return the index of the left pointer.



#client data validation 

All the data are valid
any input it will be converted to array of strings based on the line break or space 


#Testing the logic for loading and disable the Button 

I would suggest to running just the client and put your data in the input you will see the loading, and the button it will be disabled 










  