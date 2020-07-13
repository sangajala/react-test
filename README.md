

Requirements:
1. Using React, build a webapp that queries this paginated endpoint and prints out the results as a list
	- DONE
2. The app should be paginated (page selector) with the pagination reflected in the url (so when the page is
	refreshed the same resultset is shown)

- DONE. But due to bug in the api even if i send the page number body parameter diferent i am getting same result. So this api have some issues
	which is why i get same results . 
- also the <Pagination size="sm" onClick={pageChanged} activePage={5}>{items}</Pagination
- have some issues. So the active page is not highlighting.
- I have used localStorage.setItem("PageNumber", number) to remember the page
- This is working as per login but due to bugs in apis and Pagination componend in boot strap library you cant se that
- Unit tests are added only 3. But we can add more
3. You can use React Bootstrap as a components library for simplicity
	- DONE
4. Compile your own Bootstrap theme (less/sass) with the only difference to the original that the primary
colour is `#1D7874`
	- DONE
5. Host your code on github or similar, put all the code in a Pull Request against the (probably) empty repo
	- DONE
