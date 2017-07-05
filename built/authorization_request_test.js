"use strict";
/*
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var authorization_request_1 = require("./authorization_request");
describe('AuthorizationRequest Tests', function () {
    var clientId = 'client_id';
    var redirectUri = 'http://my/redirect_uri';
    var scope = 'scope';
    var state = 'state';
    var extras = { 'key': 'value' };
    var request = new authorization_request_1.AuthorizationRequest(clientId, redirectUri, scope, authorization_request_1.AuthorizationRequest.RESPONSE_TYPE_CODE, state, extras);
    var request2 = new authorization_request_1.AuthorizationRequest(clientId, redirectUri, scope, authorization_request_1.AuthorizationRequest.RESPONSE_TYPE_CODE, undefined, extras);
    it('Basic Authorization Request Tests', function () {
        expect(request).not.toBeNull();
        expect(request.responseType).toBe(authorization_request_1.AuthorizationRequest.RESPONSE_TYPE_CODE);
        expect(request.clientId).toBe(clientId);
        expect(request.redirectUri).toBe(redirectUri);
        expect(request.scope).toBe(scope);
        expect(request.state).toBe(state);
        expect(request.extras).toBeTruthy();
        expect(request.extras['key']).toBe('value');
        expect(request.extras).toEqual(extras);
    });
    it('To Json() and from Json() should work', function () {
        var json = JSON.parse(JSON.stringify(request.toJson()));
        expect(json).not.toBeNull();
        var newRequest = authorization_request_1.AuthorizationRequest.fromJson(json);
        expect(newRequest).not.toBeNull();
        expect(newRequest.responseType).toBe(authorization_request_1.AuthorizationRequest.RESPONSE_TYPE_CODE);
        expect(newRequest.clientId).toBe(clientId);
        expect(newRequest.redirectUri).toBe(redirectUri);
        expect(newRequest.scope).toBe(scope);
        expect(newRequest.state).toBe(state);
        expect(newRequest.extras).toBeTruthy();
        expect(newRequest.extras['key']).toBe('value');
        expect(newRequest.extras).toEqual(extras);
    });
    it('Expect cryptographic newState() to populate state', function () {
        expect(request2.state).not.toBeNull();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yaXphdGlvbl9yZXF1ZXN0X3Rlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvYXV0aG9yaXphdGlvbl9yZXF1ZXN0X3Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7R0FZRzs7QUFFSCxpRUFBNkQ7QUFHN0QsUUFBUSxDQUFDLDRCQUE0QixFQUFFO0lBRXJDLElBQU0sUUFBUSxHQUFHLFdBQVcsQ0FBQztJQUM3QixJQUFNLFdBQVcsR0FBRyx3QkFBd0IsQ0FBQztJQUM3QyxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUM7SUFDdEIsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDO0lBQ3RCLElBQU0sTUFBTSxHQUFjLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBQyxDQUFDO0lBRTNDLElBQUksT0FBTyxHQUF5QixJQUFJLDRDQUFvQixDQUN4RCxRQUFRLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSw0Q0FBb0IsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFFMUYsSUFBSSxRQUFRLEdBQXlCLElBQUksNENBQW9CLENBQ3pELFFBQVEsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLDRDQUFvQixDQUFDLGtCQUFrQixFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUU5RixFQUFFLENBQUMsbUNBQW1DLEVBQUU7UUFDdEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMvQixNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyw0Q0FBb0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQzNFLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsdUNBQXVDLEVBQUU7UUFDMUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEQsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1QixJQUFJLFVBQVUsR0FBRyw0Q0FBb0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNsQyxNQUFNLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyw0Q0FBb0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQzlFLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNDLE1BQU0sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pELE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDdkMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUMsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsbURBQW1ELEVBQUU7UUFDdEQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDeEMsQ0FBQyxDQUFDLENBQUM7QUFFTCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4gKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlXG4gKiBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlclxuICogZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge0F1dGhvcml6YXRpb25SZXF1ZXN0fSBmcm9tICcuL2F1dGhvcml6YXRpb25fcmVxdWVzdCc7XG5pbXBvcnQge1N0cmluZ01hcH0gZnJvbSAnLi90eXBlcyc7XG5cbmRlc2NyaWJlKCdBdXRob3JpemF0aW9uUmVxdWVzdCBUZXN0cycsICgpID0+IHtcblxuICBjb25zdCBjbGllbnRJZCA9ICdjbGllbnRfaWQnO1xuICBjb25zdCByZWRpcmVjdFVyaSA9ICdodHRwOi8vbXkvcmVkaXJlY3RfdXJpJztcbiAgY29uc3Qgc2NvcGUgPSAnc2NvcGUnO1xuICBjb25zdCBzdGF0ZSA9ICdzdGF0ZSc7XG4gIGNvbnN0IGV4dHJhczogU3RyaW5nTWFwID0geydrZXknOiAndmFsdWUnfTtcblxuICBsZXQgcmVxdWVzdDogQXV0aG9yaXphdGlvblJlcXVlc3QgPSBuZXcgQXV0aG9yaXphdGlvblJlcXVlc3QoXG4gICAgICBjbGllbnRJZCwgcmVkaXJlY3RVcmksIHNjb3BlLCBBdXRob3JpemF0aW9uUmVxdWVzdC5SRVNQT05TRV9UWVBFX0NPREUsIHN0YXRlLCBleHRyYXMpO1xuXG4gIGxldCByZXF1ZXN0MjogQXV0aG9yaXphdGlvblJlcXVlc3QgPSBuZXcgQXV0aG9yaXphdGlvblJlcXVlc3QoXG4gICAgICBjbGllbnRJZCwgcmVkaXJlY3RVcmksIHNjb3BlLCBBdXRob3JpemF0aW9uUmVxdWVzdC5SRVNQT05TRV9UWVBFX0NPREUsIHVuZGVmaW5lZCwgZXh0cmFzKTtcblxuICBpdCgnQmFzaWMgQXV0aG9yaXphdGlvbiBSZXF1ZXN0IFRlc3RzJywgKCkgPT4ge1xuICAgIGV4cGVjdChyZXF1ZXN0KS5ub3QudG9CZU51bGwoKTtcbiAgICBleHBlY3QocmVxdWVzdC5yZXNwb25zZVR5cGUpLnRvQmUoQXV0aG9yaXphdGlvblJlcXVlc3QuUkVTUE9OU0VfVFlQRV9DT0RFKTtcbiAgICBleHBlY3QocmVxdWVzdC5jbGllbnRJZCkudG9CZShjbGllbnRJZCk7XG4gICAgZXhwZWN0KHJlcXVlc3QucmVkaXJlY3RVcmkpLnRvQmUocmVkaXJlY3RVcmkpO1xuICAgIGV4cGVjdChyZXF1ZXN0LnNjb3BlKS50b0JlKHNjb3BlKTtcbiAgICBleHBlY3QocmVxdWVzdC5zdGF0ZSkudG9CZShzdGF0ZSk7XG4gICAgZXhwZWN0KHJlcXVlc3QuZXh0cmFzKS50b0JlVHJ1dGh5KCk7XG4gICAgZXhwZWN0KHJlcXVlc3QuZXh0cmFzIVsna2V5J10pLnRvQmUoJ3ZhbHVlJyk7XG4gICAgZXhwZWN0KHJlcXVlc3QuZXh0cmFzKS50b0VxdWFsKGV4dHJhcyk7XG4gIH0pO1xuXG4gIGl0KCdUbyBKc29uKCkgYW5kIGZyb20gSnNvbigpIHNob3VsZCB3b3JrJywgKCkgPT4ge1xuICAgIGxldCBqc29uID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShyZXF1ZXN0LnRvSnNvbigpKSk7XG4gICAgZXhwZWN0KGpzb24pLm5vdC50b0JlTnVsbCgpO1xuICAgIGxldCBuZXdSZXF1ZXN0ID0gQXV0aG9yaXphdGlvblJlcXVlc3QuZnJvbUpzb24oanNvbik7XG4gICAgZXhwZWN0KG5ld1JlcXVlc3QpLm5vdC50b0JlTnVsbCgpO1xuICAgIGV4cGVjdChuZXdSZXF1ZXN0LnJlc3BvbnNlVHlwZSkudG9CZShBdXRob3JpemF0aW9uUmVxdWVzdC5SRVNQT05TRV9UWVBFX0NPREUpO1xuICAgIGV4cGVjdChuZXdSZXF1ZXN0LmNsaWVudElkKS50b0JlKGNsaWVudElkKTtcbiAgICBleHBlY3QobmV3UmVxdWVzdC5yZWRpcmVjdFVyaSkudG9CZShyZWRpcmVjdFVyaSk7XG4gICAgZXhwZWN0KG5ld1JlcXVlc3Quc2NvcGUpLnRvQmUoc2NvcGUpO1xuICAgIGV4cGVjdChuZXdSZXF1ZXN0LnN0YXRlKS50b0JlKHN0YXRlKTtcbiAgICBleHBlY3QobmV3UmVxdWVzdC5leHRyYXMpLnRvQmVUcnV0aHkoKTtcbiAgICBleHBlY3QobmV3UmVxdWVzdC5leHRyYXMhWydrZXknXSkudG9CZSgndmFsdWUnKTtcbiAgICBleHBlY3QobmV3UmVxdWVzdC5leHRyYXMpLnRvRXF1YWwoZXh0cmFzKTtcbiAgfSk7XG5cbiAgaXQoJ0V4cGVjdCBjcnlwdG9ncmFwaGljIG5ld1N0YXRlKCkgdG8gcG9wdWxhdGUgc3RhdGUnLCAoKSA9PiB7XG4gICAgZXhwZWN0KHJlcXVlc3QyLnN0YXRlKS5ub3QudG9CZU51bGwoKTtcbiAgfSk7XG5cbn0pO1xuIl19