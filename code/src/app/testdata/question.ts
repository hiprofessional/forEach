export const questionData = {
  "items": [
    {
      "tags": [
        "json",
        "angular",
        "asmx",
        "angular-akita",
        "akita"
      ],
      "owner": {
        "reputation": 2146,
        "user_id": 4251829,
        "user_type": "registered",
        "profile_image": "https://www.gravatar.com/avatar/0e2e4559d674d70d38f3bd5cdb9c3b39?s=128&d=identicon&r=PG&f=1",
        "display_name": "Gunnar B.",
        "link": "https://stackoverflow.com/users/4251829/gunnar-b"
      },
      "is_answered": false,
      "view_count": 8,
      "answer_count": 0,
      "score": 0,
      "last_activity_date": 1607941571,
      "creation_date": 1607940746,
      "last_edit_date": 1607941571,
      "question_id": 65287143,
      "content_license": "CC BY-SA 4.0",
      "link": "https://stackoverflow.com/questions/65287143/angular-akita-entity-service-with-asmx-web-service-json-string-response-deseri",
      "title": "Angular Akita entity service with asmx web service (json/string response) deserialization",
      "body": "<p>I have an angular frontend from which I access an asmx webservice. The respective class is marked as <code>ScriptService</code> and is generally able to return JSON (Post-request, Get will always return XML even with the respective ScriptMethod attributes (and empty body instead of null if no params)).</p>\n<p>Generally this works, but I'm not exactly getting JSON back but a string (basically double serialization, I'm using JsonConvert.SerializeObject in the asmx, e.g. because some methods return DataTable). The actual result is nested in the <code>d</code> property, so returning an object would have a response body like <code>{&quot;d&quot;:&quot;{...}&quot;}</code>.</p>\n<p>Currently I'm using <code>NGRX Store</code> and my frontend http head looks like this (centralized connector service):</p>\n<pre><code>constructor(private http: HttpClient) {\n  this._options\n    .set('Access-Control-Allow-Origin', document.location.origin)\n    .append('Access-Control-Allow-Credentials', 'true')\n    .append('Accept', 'application/json')\n    .append('Content-Type', 'application/json');\n}\n\npublic post&lt;T&gt;(\n  url,\n  params: { [key: string]: string | string[] | number | number[] | boolean }\n): Observable&lt;T&gt; {\n  return this.http\n    .post(url, params, {\n      headers: this._options,\n      responseType: 'json',\n    })\n    .pipe(\n      map((res: { d: string }) =&gt; JsonUtils.Deserialize&lt;T&gt;(res.d)),\n      catchError((err: any) =&gt; throwError(err))\n    );\n}\n\n/* JsonUtils */\n\npublic static Deserialize&lt;T&gt;(data: string): T {\n  return JSON.parse(data, this.ReviveDateTime) as T;\n}\n</code></pre>\n<p>As you can see, I'm doing the parse myself (expecting the <code>d: string</code> in the response).</p>\n<p>A method in the webservice looks like this:</p>\n<pre><code>[ScriptService]\npublic class WebServiceA: WebService {\n  [WebMethod]\n  public string getUser() {\n  User user = new User();\n    user.id = /*Get id from webservice logic (windows user)*/\n    user.name = /*...*/\n    user.roles = /*...*/\n    return JsonConvert.SerializeObject(user);\n\n    // returning the user directly would result in a proper json object in the response but with '__type' \n    // I couldn't figure out if HttpClient can recognize that, in my tests I couldn't get it to work\n  }\n}\n</code></pre>\n<p>Now, a coworker of mine is starting another project and instead of <code>NGRX</code> he will go with <code>Akita</code> which I might want to switch to too (more lightweight and less different solutions in the company). I had a look a it and I was able to get it working (at least the result looks ok in the devtools) with the <code>EntityService package</code> (which I want to use to safe all the boilerplate).</p>\n<p>For that I wrapped the <code>get</code> method from EntityService like this:</p>\n<pre><code>loadUser() {\n  return this.get&lt;User&gt;({\n    url: `${this.api}/getUser`,\n    mapResponseFn: (res: { d: string }) =&gt; JsonUtils.Deserialize&lt;User&gt;(res.d),\n  }).subscribe();\n}\n</code></pre>\n<p>Or for an array (+ params):</p>\n<pre><code>loadWorkplaces() {\n  return this.get&lt;Workplace[]&gt;({\n    url: `${this.api}/getWorkplaceAll`,\n    body: {\n      // test values, would be 'someDate.toISOString()' in practice\n      dateFrom: '2020-12-07T00:00:00.000Z',\n      today: '2020-12-14T00:00:00.000Z',\n      dateTo: '2021-01-10T23:59:59.999Z',\n    },\n    mapResponseFn: (res: { d: string }) =&gt;\n      JsonUtils.Deserialize&lt;Workplace[]&gt;(res.d),\n  }).subscribe();\n}\n</code></pre>\n<p>(I've set <code>NG_ENTITY_SERVICE_CONFIG</code> to use <code>POST</code> instead of <code>GET</code>)</p>\n<p>I'm not really a fan of this though (neither frontend nor asmx). Is there a better way to do this? (Even if I don't end up switching to Akita, I think I could improve at least the webservice).</p>\n"
    }
  ],
  "has_more": false,
  "quota_max": 300,
  "quota_remaining": 294
};