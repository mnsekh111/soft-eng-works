# HW4 
## Submitted by Sekharan Natarajan (smnatara)
Please refer to [analysis.js](analysis.js)


Please use `node --harmony_array_includes analysis.js` to run. 

##### 1. Do a simple calculations (50 points)

   * **String Usage**: How many string literals are used in file.

   ```javascript
        if (node.type === 'Literal' && typeof(node.value) === 'string') {
            fileBuilder.Strings += 1;
        }
   ```

   * **ParameterCount**: The number of parameters for function. 
   
   ```javascript
		if (node.type === 'FunctionDeclaration') {
            var builder = new FunctionBuilder();

            builder.FunctionName = functionName(node);
            builder.StartLine = node.loc.start.line;
            builder.ParameterCount = node.params.length;
            builder.MaxMessageChains = 0;
       }
   ```
   
   * **PackageComplexity**: The number of imports used in file. 
  
   ```javascript
		if (node.type === 'Identifier' && node.name === 'require') {
            fileBuilder.PackageComplexity += 1;
        }
   ```
   
   * **Returns**: The number of return statements in function.
   
   ```javascript
	        if (node.type === 'FunctionDeclaration') {
            	var builder = new FunctionBuilder();

            	builder.FunctionName = functionName(node);
            	builder.StartLine = node.loc.start.line;
            	builder.ParameterCount = node.params.length;
            	builder.MaxMessageChains = 0;

            	builders[builder.FunctionName] = builder;

            	traverseWithParents(node, function (child) {

                	if (isDecision(child)) {
                    	builder.SimpleCyclomaticComplexity += 1;
                	}
                	if (child.type === 'ReturnStatement') {
                    	builder.ReturnCount += 1;
                	}
            	}
            }
   ```
   
   * **AllConditions**: The total number of conditions in file.
   
   ```javascript
		if (isDecision(node) || node.operator === '&&' || node.operator === '||') {
            fileBuilder.FileConditions += 1;
        }    
   ```

##### 2. Using multiple visitors (50 points).

   * **SimpleCyclomaticComplexity**: The number of if statements/loops + 1.
	```javascript
	if(isDecision(child)){
 		builder.SimpleCyclomaticComplexity += 1;
	}

	```



   * **MaxMessageChains**: The max length of a message chain in a function. A message chain can be formed from a method call (), a data access (.), or array access [0].
   
  ```javascript
          if (child.type === 'MemberExpression') {
              var currentCount = getNestedCount(child, 0, ['MemberExpression']);
			  if (currentCount > builder.MaxMessageChains)
                        builder.MaxMessageChains = currentCount;
          }
  ``` 

#####3. Bonus (20 points):

   * **MaxConditions**: The max number of conditions inside one if statement per function.
   
   ```javascript
         if (child.type === 'IfStatement') {
              var currentCount = getNestedCount(child.test, 1, ['LogicalExpression']);
                if (currentCount > builder.MaxConditions)
                   builder.MaxConditions = currentCount;
         }
   ```
   
   * **MaxNestingDepth**: The max depth of scopes (nested ifs, loops, etc) per function.
   
   ```javascript
   	function getMaxDepth(object, count, type, key) {
    	var key, child;
    	if (type.includes(object.type) && 'alternate' != key) {
        	count += 1;
    	}

    	for (key in object) {
        	if (object.hasOwnProperty(key)) {
            	child = object[key];
            	if (typeof child === 'object' && child !== null && key != 'parent') {
                	child.parent = object;
                	var newcount = getMaxDepth(child, count, type, key);
                	if (newcount > count) {
                    	count = newcount;
                	}
            	}
        	}
    	}
    	return count;
     }
   ```
