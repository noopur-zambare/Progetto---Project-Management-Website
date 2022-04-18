#include <stdio.h>
#include<stdlib.h>
#include <limits.h>
#include <stdbool.h>



typedef struct Node{
    char server1[3];
    char server2[3];
    int weight;
    struct Node *next;
}node;

int totalRouters = 0, totalServers = 0;
int V;
node* storeInput(int edges){
    node *head = (node*)malloc(sizeof(node));
    head->next = NULL;
    scanf("%s %s %d",head->server1, head->server2, &(head->weight));
    
    node *temp = head;
    for(int i = 1; i < edges; i++){
        node *newNode = (node*)malloc(sizeof(node));
        newNode->next = NULL;
        scanf("%s %s %d",newNode->server1, newNode->server2, &(newNode->weight));
        
        if(newNode->server1[0] == 'S'){
            if((int)newNode->server1[1] - 48 > totalServers){
                totalServers = (int)newNode->server1[1] - 48;
            }
        }
        else{
            if((int)newNode->server1[1] < 57 &&(int)newNode->server1[1] - 48 > totalRouters){
                totalRouters = (int)newNode->server1[1] - 48;
            }
        }

        if(newNode->server2[0] == 'S'){
            if((int)newNode->server2[1] - 48 > totalServers){
                totalServers = (int)newNode->server2[1] - 48;
            }
        }
        else{
            if((int)newNode->server2[1] < 57 &&(int)newNode->server2[1] - 48 > totalRouters){
                totalRouters = (int)newNode->server2[1] - 48;
            }
        }
       
        temp->next = newNode;
        temp = newNode;
    }
    
    totalRouters = totalRouters + 1;
    return head;
}

void createGraph( node *head, int totalNodes, int Graph[totalNodes][totalNodes]){
    node *temp = head;
    int s1, s2;
    while(temp != NULL){
        if(temp->server1[0] == 'S'){
            s1 = ((int)temp->server1[1] - 48) + totalRouters - 1;
                
        }
        else{
            if((int)temp->server1[1] < 57){
                s1 = (int)temp->server1[1] - 48;
            }
            else{
                s1 = 0;
            }
        }

        if(temp->server2[0] == 'S'){
            s2 = ((int)temp->server2[1] - 48) + totalRouters - 1;
            
        }
        else{
            if((int)temp->server2[1] < 57){
                s2 = (int)temp->server2[1] - 48;
            }
            else{
                s2 = 0;
            }
        }
        Graph[s1][s2] = Graph[s2][s1] = temp->weight;
        temp = temp->next;
    }
   
}
void printAdjMatrix(int arr[][V+1])
{
     int i, j;

     for(i = 0; i < V; i++)
     {
         for(j = 0; j < V; j++)
         {
             printf("%d ", arr[i][j]);
         }
         printf("\n");
     }
}
int minDistance(int dist[], bool sptSet[])
{
	
	int min = INT_MAX, min_index;

	for (int v = 0; v < V; v++)
		if (sptSet[v] == false && dist[v] <= min)
			min = dist[v], min_index = v;

	return min_index;
}
int flag=0;
void printPath(int parent[], int j)
{ 
       
    
    if (parent[j] == - 1){
        printf("RC ");
        return;
    }
        
    
    printPath(parent, parent[j]);
    
   
    // if(j!=0){
        if(j<totalRouters){
            printf("R%d ", j);
            
        }
        else{
            printf("S%d ", j-totalRouters+1);
            
        }
            
     
        
    // }
    
}
int printSolution(int dist[], int n, 
                      int parent[],int w)
{
    int src = 0;

    
        printf("%d ",dist[w+totalRouters-1]);           
        printPath(parent, w+totalRouters-1);
        printf("\n");
        
    
}

int *Dist;
int *Parent;

void dijkstra(int graph[V][V], int src)
{
	int *dist = (int*)malloc(V*sizeof(int));; 

	bool sptSet[V]; 
    int *parent = (int*)malloc(V*sizeof(int));
	for (int i = 0; i < V; i++)
		parent[0] = -1,dist[i] = INT_MAX, sptSet[i] = false;


	dist[src] = 0;


	for (int count = 0; count < V - 1; count++) {
	
		int u = minDistance(dist, sptSet);


		sptSet[u] = true;


		for (int v = 0; v < V; v++)

			if (!sptSet[v] && graph[u][v] && dist[u] != INT_MAX
				&& dist[u] + graph[u][v] < dist[v]){
                    parent[v] = u;
                    dist[v] = dist[u] + graph[u][v];
                }
				
	}
    Dist=dist;
    Parent=parent;
    
}


int main(){
    int N;
    scanf("%d",&N);
    V=N;
    

    node *head = storeInput(N);
    int totalNodes = totalRouters + totalServers;
   
    int Graph[totalNodes][totalNodes];
    for(int i = 0; i < totalNodes; i++){
        for ( int j = 0; j < totalNodes; j++){
            Graph[i][j] = 0;
            
        }
        
    }
    createGraph( head, totalNodes, Graph);
    
    dijkstra(Graph, 0);
    // char input;
    // int num;
    // scanf("%c",&input);
    // printf("cc-%c",input);
    // while(input!='T'){
    //     printf("done");
    //     scanf("%d",&num);
    //     printSolution(Dist,N,Parent,num);
    //     scanf("%c",&input);
        
    // }
    char str[3];

    gets(str);
    char str1[2];
    str1[0]=str[1];
    str1[1]="\0";
    
    while(str[0]!='T'){
        int num = atoi(str1);
        if(num!=0){
            printSolution(Dist,N,Parent,num);
        }
        
        gets(str);
        str1[0]=str[1];
        str1[1]="\0";
    }
    
    







    return 0;
}